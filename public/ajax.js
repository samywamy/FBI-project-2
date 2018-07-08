document.getElementById('random-button').addEventListener('click', loadRandomRecipe);
document.getElementById('search-button').addEventListener('click', loadSearchResults);

const recipeDiv = document.getElementById('recipes');

var recipes = [];

function loadRandomRecipe() {
	// BEGIN temporary code to avoid API calls, remove or comment when doing real API calls
			// let htmlTable = recipeTable(recipes);
			// recipeDiv.innerHTML = '';
			// recipeDiv.appendChild(htmlTable);
            showRecipe(recipes[0]);
			return;
	// END temporary code to avoid API calls

	let xhr = new XMLHttpRequest();
	xhr.open('GET','https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random', true);
	xhr.setRequestHeader('X-Mashape-Key','***removed****');

	xhr.onload = function() {
		if (this.status == 200) {
			console.log('printing out the response so I have the recipe structure on hand\n' + this.responseText);
			recipes = JSON.parse(this.responseText).recipes;
			// let htmlTable = recipeTable(recipes);
			// recipeDiv.innerHTML = '';
			// recipeDiv.appendChild(htmlTable);
            showRecipe(recipes[0]);
		}
	}
	xhr.send();
}


function loadSearchResults() {
    // BEGIN temporary code to avoid API calls, remove or comment when doing real API calls
            let htmlTable = recipeTable(recipes);
            recipeDiv.innerHTML = '';
            recipeDiv.appendChild(htmlTable);
            return;
    // END temporary code to avoid API calls
    let input = document.getElementById('search-bar').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients' +
        '?fillIngredients=true&ingredients=' + encodeURIComponent(input), true);
    xhr.setRequestHeader('X-Mashape-Key','***removed****');

    xhr.onload = function() {
        if (this.status == 200) {
            console.log('printing out the response so I have the recipe structure on hand\n' + this.responseText);
            recipes = JSON.parse(this.responseText);
            let htmlTable = recipeTable(recipes);
            recipeDiv.innerHTML = '';
            recipeDiv.appendChild(htmlTable);
        }
    };
    xhr.send();
}


function recipeTable(recipeArr) {
	let tableElement = document.createElement('table');
	for (let i = 0; i < recipeArr.length; i++) {
		let recipe = recipeArr[i];
		let rowElement = recipeRow(recipe); // creates a row for each recipe
		rowElement.addEventListener('click', function() { postRecipe(i); } );
		tableElement.appendChild(rowElement);
	}

	return tableElement;
}

function recipeRow(recipe) {
	let tableRow = document.createElement('tr'); // creates new table row
    let titleTD = getSimpleTDElement(recipe.title); // puts title in a TD element
    tableRow.appendChild(titleTD); // append title to row
    let imageStr = recipe.image;
    let imageTD = getTDImage(imageStr);
    tableRow.appendChild(imageTD);
	// let ingredientsString = getIngredientsString(recipe.extendedIngredients); 
    // let ingredientsTD = getSimpleTDElement(ingredientsString);
	// tableRow.appendChild(ingredientsTD);
    
	return tableRow;
}


function getSimpleTDElement(str) {
	let tableData = document.createElement('td');
	tableData.width = "50%";

	tableData.innerHTML = str;

	return tableData;
}

function getTDImage(str) {
    let tableData = document.createElement('td');
    let image = document.createElement('img');
    image.src = str;
    tableData.appendChild(image);

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


function postRecipe(idx) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + 
        recipes[idx].id + '/information?includeNutrition=true', true);
    xhr.setRequestHeader('X-Mashape-Key','***removed****');

    xhr.onload = function() {
        if (this.status == 200) {
            let recipe = JSON.parse(this.responseText);
            console.log(this.responseText);
            showRecipe(recipe);
        }
    };

    xhr.send();
}


function showRecipe(recipe) {
    let xmlhttp = new XMLHttpRequest();   
    xmlhttp.open("POST", "/recipe");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = function() { // when we receive a response from the server, do this
        if (this.readyState == 4 && this.status == 200) {
            document.open();
            document.write(this.response);
            document.close();
        }
    };
    xmlhttp.send(JSON.stringify(recipe)); 
}









recipes = [
    {
        "id": 227365,
        "title": "Scrambled Eggs With Smoked Salmon, Spinach, and Chives",
        "image": "https://spoonacular.com/recipeImages/227365-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 18439,
                "amount": 3.0,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Bakery/Bread",
                "name": "english muffins",
                "original": "3 whole wheat English muffins, split and toasted",
                "originalString": "3 whole wheat English muffins, split and toasted",
                "originalName": null,
                "metaInformation": [
                    "whole wheat",
                    "split",
                    "english",
                    "toasted"
                ],
                "extendedName": "split whole wheat english muffins",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/English-muffins.jpg"
            },
            {
                "id": 43274,
                "amount": 4.0,
                "unit": "ounces",
                "unitLong": "ounces",
                "unitShort": "oz",
                "aisle": "Cheese",
                "name": "low-fat cream cheese",
                "original": "1/2 cup (4 ounces) 1/3-less-fat cream cheese, diced",
                "originalString": "1/2 cup (4 ounces) 1/3-less-fat cream cheese, diced",
                "originalName": null,
                "metaInformation": [
                    "diced"
                ],
                "extendedName": "diced low-fat cream cheese",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 5.0,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "5 large eggs",
                "originalString": "5 large eggs",
                "originalName": null,
                "metaInformation": [
                    "large"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"
            },
            {
                "id": 15076,
                "amount": 3.0,
                "unit": "ounces",
                "unitLong": "ounces",
                "unitShort": "oz",
                "aisle": "Seafood",
                "name": "salmon",
                "original": "3 ounces thinly sliced smoked salmon, diced",
                "originalString": "3 ounces thinly sliced smoked salmon, diced",
                "originalName": null,
                "metaInformation": [
                    "smoked",
                    "diced",
                    "thinly sliced"
                ],
                "extendedName": "diced smoked salmon",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.jpg"
            },
            {
                "id": 10011457,
                "amount": 1.0,
                "unit": "cup",
                "unitLong": "cup",
                "unitShort": "cup",
                "aisle": "Produce",
                "name": "spinach",
                "original": "1 cup chopped fresh spinach",
                "originalString": "1 cup chopped fresh spinach",
                "originalName": null,
                "metaInformation": [
                    "fresh",
                    "chopped"
                ],
                "extendedName": "fresh spinach",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            }
        ],
        "unusedIngredients": [],
        "likes": 0
    },
    {
        "id": 149070,
        "title": "Salmon Spinach Scramble",
        "image": "https://spoonacular.com/recipeImages/149070-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 1,
        "missedIngredients": [
            {
                "id": 15077,
                "amount": 115.0,
                "unit": "g",
                "unitLong": "grams",
                "unitShort": "g",
                "aisle": "Seafood",
                "name": "smoked salmon",
                "original": "115 g smoked salmon",
                "originalString": "115 g smoked salmon",
                "originalName": null,
                "metaInformation": [
                    "smoked"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/smoked-salmon.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 6.0,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "6 eggs",
                "originalString": "6 eggs",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"
            },
            {
                "id": 10011457,
                "amount": 240.0,
                "unit": "g",
                "unitLong": "grams",
                "unitShort": "g",
                "aisle": "Produce",
                "name": "spinach",
                "original": "240 g spinach",
                "originalString": "240 g spinach",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            }
        ],
        "unusedIngredients": [
            {
                "id": 15076,
                "amount": 1.0,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Seafood",
                "name": "salmon",
                "original": "salmon",
                "originalString": "salmon",
                "originalName": "salmon",
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.jpg"
            }
        ],
        "likes": 0
    },
    {
        "id": 475153,
        "title": "Salmon Eggs Benedict",
        "image": "https://spoonacular.com/recipeImages/475153-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 6150,
                "amount": 4.0,
                "unit": "servings",
                "unitLong": "servings",
                "unitShort": "servings",
                "aisle": "Condiments",
                "name": "bbq sauce",
                "original": "hollendaise sauce",
                "originalString": "hollendaise sauce",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/barbecue-sauce.jpg"
            },
            {
                "id": 10015076,
                "amount": 4.0,
                "unit": "servings",
                "unitLong": "servings",
                "unitShort": "servings",
                "aisle": "Seafood",
                "name": "salmon steaks",
                "original": "salmon steaks, broiled",
                "originalString": "salmon steaks, broiled",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 4.0,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "4 eggs, poached",
                "originalString": "4 eggs, poached",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"
            },
            {
                "id": 10011457,
                "amount": 8.0,
                "unit": "ounces",
                "unitLong": "ounces",
                "unitShort": "oz",
                "aisle": "Produce",
                "name": "spinach",
                "original": "8 - 9 ounces spinach, steamed",
                "originalString": "8 - 9 ounces spinach, steamed",
                "originalName": null,
                "metaInformation": [
                    "steamed"
                ],
                "extendedName": "cooked spinach",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            }
        ],
        "unusedIngredients": [
            {
                "id": 15076,
                "amount": 1.0,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Seafood",
                "name": "salmon",
                "original": "salmon",
                "originalString": "salmon",
                "originalName": "salmon",
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.jpg"
            }
        ],
        "likes": 118
    },
    {
        "id": 611960,
        "title": "Everything Scrambled Eggs",
        "image": "https://spoonacular.com/recipeImages/611960-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 4,
        "missedIngredients": [
            {
                "id": 11457,
                "amount": 1.0,
                "unit": "pound",
                "unitLong": "pound",
                "unitShort": "lb",
                "aisle": "Produce",
                "name": "baby spinach",
                "original": "1 pound baby spinach",
                "originalString": "1 pound baby spinach",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            },
            {
                "id": 1017,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Cheese",
                "name": "cream cheese",
                "original": "1/2 cup whipped cream cheese",
                "originalString": "1/2 cup whipped cream cheese",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
            },
            {
                "id": 1077,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "1/2 cup milk",
                "originalString": "1/2 cup milk",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.jpg"
            },
            {
                "id": 10011282,
                "amount": 0.5,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "red onion",
                "original": "1/2 red onion. chopped",
                "originalString": "1/2 red onion. chopped",
                "originalName": null,
                "metaInformation": [
                    "red",
                    "chopped"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/red-onion.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 8.0,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "8 eggs",
                "originalString": "8 eggs",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"
            },
            {
                "id": 15076,
                "amount": 0.75,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Seafood",
                "name": "salmon",
                "original": "3/4 cup smoked salmon, shredded",
                "originalString": "3/4 cup smoked salmon, shredded",
                "originalName": null,
                "metaInformation": [
                    "smoked",
                    "shredded"
                ],
                "extendedName": "shredded smoked salmon",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.jpg"
            }
        ],
        "unusedIngredients": [
            {
                "id": 10011457,
                "amount": 1.0,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "spinach",
                "original": "spinach",
                "originalString": "spinach",
                "originalName": "spinach",
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            }
        ],
        "likes": 17
    },
    {
        "id": 617805,
        "title": "Smoked Salmon and Lentil Salad – 7 Points",
        "image": "https://spoonacular.com/recipeImages/617805-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 6,
        "missedIngredients": [
            {
                "id": 11457,
                "amount": 2.0,
                "unit": "cups",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Produce",
                "name": "baby spinach leaves",
                "original": "2 cups fresh baby spinach leaves",
                "originalString": "2 cups fresh baby spinach leaves",
                "originalName": null,
                "metaInformation": [
                    "fresh"
                ],
                "extendedName": "fresh baby spinach leaves",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            },
            {
                "id": 10311529,
                "amount": 0.25,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Produce",
                "name": "cherry tomatoes",
                "original": "1/4 cup cherry tomatoes",
                "originalString": "1/4 cup cherry tomatoes",
                "originalName": null,
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cherry-tomatoes.jpg"
            },
            {
                "id": 16070,
                "amount": 0.25,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Pasta and Rice;Canned and Jarred",
                "name": "cooked lentils",
                "original": "1/4 cup cooked lentils",
                "originalString": "1/4 cup cooked lentils",
                "originalName": null,
                "metaInformation": [
                    "cooked"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/lentils-brown.jpg"
            },
            {
                "id": 9152,
                "amount": 1.0,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "lemon juice",
                "original": "Squirt of fresh lemon juice",
                "originalString": "Squirt of fresh lemon juice",
                "originalName": null,
                "metaInformation": [
                    "fresh"
                ],
                "extendedName": "fresh lemon juice",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
            },
            {
                "id": 15077,
                "amount": 2.0,
                "unit": "oz",
                "unitLong": "ounces",
                "unitShort": "oz",
                "aisle": "Seafood",
                "name": "smoked salmon",
                "original": "2 oz wild caught smoked salmon",
                "originalString": "2 oz wild caught smoked salmon",
                "originalName": null,
                "metaInformation": [
                    "wild caught",
                    "smoked"
                ],
                "extendedName": "wild caught smoked salmon",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/smoked-salmon.jpg"
            },
            {
                "id": 12698,
                "amount": 2.0,
                "unit": "tbsp",
                "unitLong": "tablespoons",
                "unitShort": "Tbsp",
                "aisle": "Ethnic Foods;Health Foods",
                "name": "tahini",
                "original": "2 tbsp prepared tahini sauce (I used Trader Joe's brand)",
                "originalString": "2 tbsp prepared tahini sauce (I used Trader Joe's brand)",
                "originalName": null,
                "metaInformation": [
                    "prepared",
                    "(I used Trader Joe's brand)"
                ],
                "extendedName": "cooked tahini",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/tahini-paste.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 1.0,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "egg",
                "original": "1 hard boiled egg, cut into wedges",
                "originalString": "1 hard boiled egg, cut into wedges",
                "originalName": null,
                "metaInformation": [
                    "hard",
                    "boiled",
                    "cut into wedges"
                ],
                "extendedName": "cooked egg",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"
            }
        ],
        "unusedIngredients": [
            {
                "id": 15076,
                "amount": 1.0,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Seafood",
                "name": "salmon",
                "original": "salmon",
                "originalString": "salmon",
                "originalName": "salmon",
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/salmon.jpg"
            },
            {
                "id": 10011457,
                "amount": 1.0,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "spinach",
                "original": "spinach",
                "originalString": "spinach",
                "originalName": "spinach",
                "metaInformation": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            }
        ],
        "likes": 8
    }
];
