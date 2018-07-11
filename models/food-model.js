module.exports = function(db) {

	const checkApiCalls = (successCallback, errorCallback) => {

		const queryString = "SELECT COUNT(*) AS number FROM request_times WHERE timestamp >= NOW() - '1 day'::INTERVAL";
	
		db.query(queryString, (err, result) => {
			if (err) {
				errorCallback(err);
			} else {
				if (result.rows[0].number < 50) {
					successCallback(result);
				} else {
					errorCallback("Too many API calls in the past 24hrs.");
				}
			}
		});
	};



	const storeRequestTimes = (successCallback, errorCallback) => {

		const queryString = "INSERT INTO request_times (timestamp) VALUES (NOW())";

		db.query(queryString, (err, result) => {
			if (err) {
				errorCallback(err);
			} else {
				successCallback(result);
			}
		});
	};



	const withApiKey = (successCallback, errorCallback) => {

		const ifSuccess = (result) => {
			const queryString = "SELECT key AS api_key FROM api";
			db.query(queryString, (err, result) => {
				if (err) {
					errorCallback(err);
				} else {
					successCallback(result.rows[0].api_key);
				}
			});
		};	

		checkApiCalls(ifSuccess, errorCallback);
	};



	const storeUserRecipe = (id, recipeData, successCallback, errorCallback) => {

		const queryString = "INSERT INTO user_created_recipes (user_id, title, ingredients, directions) VALUES ($1, $2, $3, $4)";
		const values = [id, recipeData.title, recipeData.ingredients, recipeData.steps];
		
		const queryCallback = (err, result) => {
			if (err) {
				errorCallback(err);
			} else {
				successCallback();
			}
		};
		
		db.query(queryString, values, queryCallback);		
	};



	const storeApiRecipe = (recipe, userId, successCallback, errorCallback) => {

		const queryString = "INSERT INTO user_saved_recipes (user_id, api_id, title, image, json) VALUES ($1, $2, $3, $4, $5)";
		const values = [userId, recipe.id, recipe.title, recipe.image, JSON.stringify(recipe)];

		const queryCallback = (err, result) => {
			if (err) {
				errorCallback(err);
			} else {
				successCallback();
			}
		};
		
		db.query(queryString, values, queryCallback);		
	};



	const showUserRecipe = (id, userId, successCallback, errorCallback) => {

		const queryString = "SELECT * FROM user_created_recipes WHERE id = $1 AND user_id = $2";
		const values = [id, userId];
		
		const queryCallback = (err, result) => {
			if (err) {
				errorCallback(err);
            } else {
                if (result.rows.length == 0) {
	                errorCallback("Recipe not found.");
				} else {
					successCallback(result.rows[0]);
				}
			}	
		};
		
		db.query(queryString, values, queryCallback);		
	};



	const deleteSavedRecipe = (id, userId, successCallback, errorCallback) => {

		const queryString = "DELETE FROM user_saved_recipes WHERE api_id = $1 AND user_id = $2";
		const values = [id, userId];

		const queryCallback = (err, result) => {
			if (err) {
				errorCallback(err);
            } else {
                successCallback();
			}	
		};
		
		db.query(queryString, values, queryCallback);		
	};



	const deleteCreatedRecipe = (id, userId, successCallback, errorCallback) => {

		const queryString = "DELETE FROM user_created_recipes WHERE id = $1 AND user_id = $2";
		const values = [id, userId];

		const queryCallback = (err, result) => {
			if (err) {
				errorCallback(err);
            } else {
                successCallback();
			}	
		};
		
		db.query(queryString, values, queryCallback);		
	};



	return {
		checkApiCalls: checkApiCalls,
		storeRequestTimes: storeRequestTimes,
		withApiKey: withApiKey,
		storeUserRecipe: storeUserRecipe,
		storeApiRecipe: storeApiRecipe,
		showUserRecipe: showUserRecipe,
		deleteSavedRecipe: deleteSavedRecipe,
		deleteCreatedRecipe: deleteCreatedRecipe
	};

};