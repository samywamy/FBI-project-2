module.exports = (db) => {

	const cached = require('./cachedapicalls.js')();
	const useCache = true;
	const requestModule = require('request');
	const foodModel = require('../models/food-model.js')(db);
	const cachedApiRecipes = {};


	const showRecipe = (request, response) => {
		// console.log(request.body);
		// console.log("kuku");
		let recipe = request.body;
		response.render('food/recipe', {kuku: recipe});
	};


	const showSearchResults = (request, response) => {

		let searchTerms = request.body.searchbar;

		let successCallback = (api_key) => {
			if (useCache) {
				response.render('food/searchResults', {kuku: cached.searchResults});
				return;
			}

			const request_obj = {
				headers: {
				  'X-Mashape-Key': api_key
				},
				uri: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients' +
				'?fillIngredients=true&ingredients=' + encodeURIComponent(searchTerms),
				method: 'GET',
				json: true
			};
			requestModule(request_obj, function (error, req_response, json) {
				if (!error && req_response.statusCode == 200) {
					foodModel.storeRequestTimes(function() {}, function() {});
					// console.log(res);
					response.render('food/searchResults', {kuku: json});
				} else {
					console.log(error);
				}
			});
		};
		let errorCallback = (err) => {
			console.log(err);
			response.render('error', {errorMsg: err});
		};

		foodModel.withApiKey(successCallback, errorCallback);        

	};



	const loadApiRecipe = (request, response) => {
		let id = request.params.id;

		if (cachedApiRecipes.id !== undefined) {
			response.render('food/recipe', {kuku: cachedApiRecipes.id});
			return;
		}

		let successCallback = (api_key) => {
			if (useCache) {
				cachedApiRecipes[cached.recipeWithNutrients.id] = cached.recipeWithNutrients;
				response.render('food/recipe', {kuku: cached.recipeWithNutrients});
				return;
			}

			const request_obj = {
				headers: {
				  'X-Mashape-Key': api_key
				},
				uri: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information?includeNutrition=true',
				method: 'GET',
				json: true
			};
			requestModule(request_obj, function (error, req_response, json) {
				if (!error && req_response.statusCode == 200) {
					foodModel.storeRequestTimes(function() {}, function() {});
					cachedApiRecipes[json.id] = json;
					response.render('food/recipe', {kuku: json});
				} else {
					console.log(error);
				}
			});
		};
		let errorCallback = (err) => {
			console.log(err);
			response.render('error', {errorMsg: err});
		};

		foodModel.withApiKey(successCallback, errorCallback);        
	}




	const showRandomRecipe = (request, response) => {
		let successCallback = (api_key) => {
			if (useCache) {
				cachedApiRecipes[cached.randomRecipe.recipes[0].id] = cached.randomRecipe.recipes[0];
				response.render('food/recipe', {kuku: cached.randomRecipe.recipes[0]});
				return;
			}

			const request_obj = {
				headers: {
				  'X-Mashape-Key': api_key
				},
				uri: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random',
				method: 'GET',
				json: true
			};
			requestModule(request_obj, function (error, req_response, json) {
				if (!error && req_response.statusCode == 200) {
					foodModel.storeRequestTimes(function() {}, function() {});
					cachedApiRecipes[json.recipes[0].id] = json.recipes[0];
					response.render('food/recipe', {kuku: json.recipes[0]});
				} else {
					console.log(error);
				}
			});
		};
		let errorCallback = (err) => {
			console.log(err);
			response.render('error', {errorMsg: err});
		};

		foodModel.withApiKey(successCallback, errorCallback);
	};



	const createRecipeForm = (request, response) => {
		if (validateLogin(request)) {
			response.render('food/createRecipe');
		} else {
			response.render('error', {errorMsg: "Log in to create a recipe."});
		}
	};



	const createRecipe = (request, response) => {
		let id = request.cookies.user;
		let recipeData = request.body;
		let successCallback = () => {
			response.redirect('/');
		};
		let errorCallback = (err) => {
			console.log(err);
			response.render('error', {errorMsg: err});
		};
		foodModel.storeUserRecipe(id, recipeData, successCallback, errorCallback);	
	};



	const validateLogin = (request) => {
		if (request.cookies.logged_in == 'true') {
			return true;
		} else {
			return false;
		}
	};



	const saveApiRecipe = (request, response) => {
		let id = (request.params.id);
		let recipe = cachedApiRecipes[id];
		let userId = request.cookies.user;
		let errorCallback = (err) => {
			response.render('error', {errorMsg: err});
		};
		let successCallback = () => {
			response.redirect('/');
		};

		if (userId == undefined) {
			response.render('user/login');
		} else if (recipe == undefined) {
			response.render('error', "Recipe not found.");
		} else {
			foodModel.storeApiRecipe(recipe, userId, successCallback, errorCallback);
		}
	};

	// const loadUserRecipe = (request) => {
	// 	let params = request.body;
	// 	let id = params.user_id
	// };





	return {
		showRecipe: showRecipe,
		showRandomRecipe: showRandomRecipe,
		showSearchResults: showSearchResults,
		loadApiRecipe: loadApiRecipe,
		createRecipeForm: createRecipeForm,
		createRecipe: createRecipe,
		saveApiRecipe: saveApiRecipe
		// loadUserRecipe: loadUserRecipe
	};




}