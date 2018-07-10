module.exports = (app, db) => {

	const food = require('../controllers/food-controller.js')(db);

	app.post('/recipe', food.showRecipe); // keep this function but with different endpoint for random recipe
// 	app.post('/recipe/random', food.showRecipe); // show random recipe
// 	app.post('/search')

	app.get('/recipe/random', food.showRandomRecipe);

	app.post('/recipe/search', food.showSearchResults);

	app.get('/recipe/:id/load', food.loadApiRecipe);

	app.get('/recipe/create', food.createRecipeForm);

	app.post('/recipe/create', food.createRecipe);

	app.get('/recipe/:id/save', food.saveApiRecipe);

	// app.get('/recipe/:id/user/load', food.loadUserRecipe);
};


	// app.get('/pokemons', pokes.allPokemon);
	// app.get('/pokemons/new', pokes.getNew);
	// app.post('/pokemons', pokes.postPokemon);