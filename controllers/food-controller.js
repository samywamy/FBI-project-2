module.exports = (db) => {

	const showRecipe = (request, response) => {
		// console.log(request.body);
		// console.log("kuku");
		let recipe = request.body;
		response.render('food/recipe', {kuku: recipe});
	};

	return {
		showRecipe: showRecipe
	};
}