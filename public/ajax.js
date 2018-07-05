document.getElementById('button').addEventListener('click', loadRecipes);
const recipeDiv = document.getElementById('recipes');

var recipes = [];

function loadRecipes() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET','https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random', true);
	xhr.setRequestHeader('X-Mashape-Key','***REMOVED***');

	xhr.onload = function() {
		if (this.status == 200) {
			console.log('printing out the response so I have the recipe structure on hand\n' + this.responseText);
			recipes = JSON.parse(this.responseText).recipes;
			let htmlTable = recipeTable(recipes);
			recipeDiv.innerHTML = '';
			recipeDiv.appendChild(htmlTable);
		}
	}
	xhr.send();
}

function recipeTable(recipeArr) {
	let tableElement = document.createElement('table');
	// use a for loop to create rows and append them to this tableElement
	// ......
	for (var i = 0; i < recipeArr.length; i++) {
		let recipe = recipeArr[i];
		let rowElement = recipeRow(recipe);
		tableElement.appendChild(rowElement);
	}

	return tableElement;
}

function recipeRow(recipe) {
	let tableRow = document.createElement('tr');

	let titleTD = getSimpleTDElement(recipe.title);
	tableRow.appendChild(titleTD);

	let ingredientsString = getIngredientsString(recipe.extendedIngredients);
	let ingredientsTD = getSimpleTDElement(ingredientsString);
	tableRow.appendChild(ingredientsTD);

	return tableRow;
}


function getSimpleTDElement(str) {
	let tableData = document.createElement('td');

	tableData.innerHTML = str;

	return tableData;
}


function getIngredientsString(ingredientsArr) {
	let result = "";

	for (var i = 0; i < ingredientsArr.length; i++) {
		let ingredient = ingredientsArr[i];
		result += ingredient.name;
		if (i < ingredientsArr.length - 1) {
			result += ', ';
		}
	}

	return result;
}
// make a function that takes an array and returns  a table, 
// then make a function that takes a recipe and returns a table row
