document.getElementById('button').addEventListener('click', loadRecipes);
const recipeDiv = document.getElementById('recipes');

var recipes = [];

function loadRecipes() {
	// BEGIN temporary code to avoid API calls, remove or comment when doing real API calls
			let htmlTable = recipeTable(recipes);
			recipeDiv.innerHTML = '';
			recipeDiv.appendChild(htmlTable);
			return;
	// END temporary code to avoid API calls

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
	for (let i = 0; i < recipeArr.length; i++) {
		let recipe = recipeArr[i];
		let rowElement = recipeRow(recipe);
		rowElement.addEventListener('click', function() { postRecipe(i); } );
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
	tableData.width = "50%";

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


function postRecipe(idx) {
	// alert("kuku");
	// console.log(JSON.stringify(recipes[idx]));
	var xmlhttp = new XMLHttpRequest();   
	xmlhttp.open("POST", "/recipe");
	// xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.open();
			document.write(xmlhttp.response);
			document.close();
		}
	};
  	xmlhttp.send(JSON.stringify(recipes[idx]));	
}











recipes = [{
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 11,
            "gaps": "no",
            "lowFodmap": false,
            "ketogenic": false,
            "whole30": false,
            "preparationMinutes": 20,
            "cookingMinutes": 50,
            "sourceUrl": "http://whoneedsacape.com/2013/01/red-velvet-squares-with-cream-cheese-filling/",
            "spoonacularSourceUrl": "https://spoonacular.com/red-velvet-squares-with-cream-cheese-filling-521108",
            "aggregateLikes": 69,
            "spoonacularScore": 11.0,
            "healthScore": 1.0,
            "creditText": "Who Needs a Cape",
            "sourceName": "Who Needs a Cape",
            "pricePerServing": 102.04,
            "extendedIngredients": [
                {
                    "id": 18371,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consitency": "solid",
                    "name": "baking powder",
                    "original": "1 tsp. baking powder",
                    "originalString": "1 tsp. baking powder",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 18372,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consitency": "solid",
                    "name": "baking soda",
                    "original": "1 tsp. baking soda",
                    "originalString": "1 tsp. baking soda",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1230,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "buttermilk.jpg",
                    "consitency": "solid",
                    "name": "buttermilk",
                    "original": "1 c. buttermilk",
                    "originalString": "1 c. buttermilk",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "c",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 10020129,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consitency": "solid",
                    "name": "cake flour",
                    "original": "2-1/2 c. sifted cake flour",
                    "originalString": "2-1/2 c. sifted cake flour",
                    "originalName": null,
                    "amount": 2.0,
                    "unit": "c",
                    "meta": [
                        "sifted"
                    ],
                    "metaInformation": [
                        "sifted"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1017,
                    "aisle": "Cheese",
                    "image": "cream-cheese.jpg",
                    "consitency": "solid",
                    "name": "cream cheese",
                    "original": "8 oz. cream cheese",
                    "originalString": "8 oz. cream cheese",
                    "originalName": null,
                    "amount": 8.0,
                    "unit": "oz",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 8.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 10019165,
                    "aisle": "Baking",
                    "image": "dutch-process-cocoa-powder.png",
                    "consitency": "solid",
                    "name": "dutch process cocoa powder",
                    "original": "*If you don't have or can't find Dutch-process cocoa powder, unsweetened cocoa powder can be substituted in its place, along with an additional 1/8 tsp. baking soda.",
                    "originalString": "*If you don't have or can't find Dutch-process cocoa powder, unsweetened cocoa powder can be substituted in its place, along with an additional 1/8 tsp. baking soda.",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "can",
                    "meta": [
                        "unsweetened",
                        "with an additional 1/8 tsp. baking soda."
                    ],
                    "metaInformation": [
                        "unsweetened",
                        "with an additional 1/8 tsp. baking soda."
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "can",
                            "unitLong": "can"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "can",
                            "unitLong": "can"
                        }
                    }
                },
                {
                    "id": 10019165,
                    "aisle": "Baking",
                    "image": "dutch-process-cocoa-powder.png",
                    "consitency": "solid",
                    "name": "dutch process cocoa powder",
                    "original": "2 tsp. Dutch-process cocoa powder*",
                    "originalString": "2 tsp. Dutch-process cocoa powder*",
                    "originalName": null,
                    "amount": 2.0,
                    "unit": "tsp",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.jpg",
                    "consitency": "solid",
                    "name": "egg",
                    "original": "1 large egg",
                    "originalString": "1 large egg",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "large"
                    ],
                    "metaInformation": [
                        "large"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.jpg",
                    "consitency": "solid",
                    "name": "eggs",
                    "original": "2 large eggs at room temperature",
                    "originalString": "2 large eggs at room temperature",
                    "originalName": null,
                    "amount": 2.0,
                    "unit": "",
                    "meta": [
                        "large",
                        "at room temperature"
                    ],
                    "metaInformation": [
                        "large",
                        "at room temperature"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-cubes.jpg",
                    "consitency": "solid",
                    "name": "granulated sugar",
                    "original": "1/3 c. granulated sugar",
                    "originalString": "1/3 c. granulated sugar",
                    "originalName": null,
                    "amount": 0.3333333333333333,
                    "unit": "c",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 0.333,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 78.863,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 12511111,
                    "aisle": "Baking",
                    "image": "extract.jpg",
                    "consitency": "liquid",
                    "name": "orange extract",
                    "original": "1/4 tsp. orange extract",
                    "originalString": "1/4 tsp. orange extract",
                    "originalName": null,
                    "amount": 0.25,
                    "unit": "tsp",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1451111,
                    "aisle": "Baking",
                    "image": "food-coloring.png",
                    "consitency": "solid",
                    "name": "red food coloring",
                    "original": "2 oz. red food coloring",
                    "originalString": "2 oz. red food coloring",
                    "originalName": null,
                    "amount": 2.0,
                    "unit": "oz",
                    "meta": [
                        "red"
                    ],
                    "metaInformation": [
                        "red"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 56.699,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consitency": "solid",
                    "name": "salt",
                    "original": "1 tsp. salt",
                    "originalString": "1 tsp. salt",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-cubes.jpg",
                    "consitency": "solid",
                    "name": "sugar",
                    "original": "1-1/2 c. sugar",
                    "originalString": "1-1/2 c. sugar",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "c",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consitency": "solid",
                    "name": "unsalted butter",
                    "original": "1 stick unsalted butter at room temperature",
                    "originalString": "1 stick unsalted butter at room temperature",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "stick",
                    "meta": [
                        "unsalted",
                        "at room temperature"
                    ],
                    "metaInformation": [
                        "unsalted",
                        "at room temperature"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "stick",
                            "unitLong": "stick"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "stick",
                            "unitLong": "stick"
                        }
                    }
                },
                {
                    "id": 2050,
                    "aisle": "Baking",
                    "image": "vanilla-extract.jpg",
                    "consitency": "liquid",
                    "name": "vanilla extract",
                    "original": "1 tsp. vanilla extract",
                    "originalString": "1 tsp. vanilla extract",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "metaInformation": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vinegar-(white).jpg",
                    "consitency": "liquid",
                    "name": "white distilled vinegar",
                    "original": "1 tsp. distilled white vinegar",
                    "originalString": "1 tsp. distilled white vinegar",
                    "originalName": null,
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [
                        "white"
                    ],
                    "metaInformation": [
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                }
            ],
            "id": 521108,
            "title": "Red Velvet Squares with Cream Cheese Filling",
            "readyInMinutes": 70,
            "servings": 15,
            "image": "https://spoonacular.com/recipeImages/521108-556x370.jpg",
            "imageType": "jpg",
            "cuisines": [],
            "dishTypes": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [],
            "occasions": [
                "valentine's day"
            ],
            "winePairing": {},
            "instructions": "Preheat oven to 350ºF and grease and flour an 11\"x9\" pan. Cut butter into one-inch-thick pieces. Using a mixer at high speed, beat butter and sugar in a bowl until creamy. Reduce speed and add eggs one by one, blending mixture after each egg is added. Add buttermilk, blending again on the reduced speed, and set mixture aside.In a medium bowl, sift together flour, cocoa, baking soda, baking powder and salt. Add food coloring and vinegar to milk mixture. In a separate large bowl, pour in both mixtures, alternating between the flour and milk mixture, and ending with flour to prevent lumps. Stir in vanilla and orange extracts and set aside.After your cream cheese mixture is prepared (recipe below), pour 1/2 of the cake batter into your pan. Scoop large spoonfuls of cream cheese mixture over red velvet batter in pan. Spread evenly with a knife before pouring reserved batter over cream cheese layer. Use the knife to swirl gently. Bake about 50 minutes. Cut into squares once completely cooled and dust with powdered sugar, if desired.Whip cream cheese at medium speed until soft. Add sugar, vanilla and egg, blending until smooth. (From this point, refer back to original Red Velvet layer instructions.)",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat oven to 350ºF and grease and flour an 11\"x9\" pan.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Cut butter into one-inch-thick pieces. Using a mixer at high speed, beat butter and sugar in a bowl until creamy. Reduce speed and add eggs one by one, blending mixture after each egg is added.",
                            "ingredients": [
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "image": "egg.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add buttermilk, blending again on the reduced speed, and set mixture aside.In a medium bowl, sift together flour, cocoa, baking soda, baking powder and salt.",
                            "ingredients": [
                                {
                                    "id": 18371,
                                    "name": "baking powder",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 18372,
                                    "name": "baking soda",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 1230,
                                    "name": "buttermilk",
                                    "image": "buttermilk.jpg"
                                },
                                {
                                    "id": 19165,
                                    "name": "cocoa powder",
                                    "image": "cocoa-powder.jpg"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Add food coloring and vinegar to milk mixture. In a separate large bowl, pour in both mixtures, alternating between the flour and milk mixture, and ending with flour to prevent lumps. Stir in vanilla and orange extracts and set aside.After your cream cheese mixture is prepared (recipe below), pour 1/2 of the cake batter into your pan. Scoop large spoonfuls of cream cheese mixture over red velvet batter in pan.",
                            "ingredients": [
                                {
                                    "id": 10711111,
                                    "name": "food color",
                                    "image": "food-coloring.png"
                                },
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                },
                                {
                                    "id": 2050,
                                    "name": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 2053,
                                    "name": "vinegar",
                                    "image": "vinegar-(white).jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "image": "bowl.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Spread evenly with a knife before pouring reserved batter over cream cheese layer. Use the knife to swirl gently.",
                            "ingredients": [
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404745,
                                    "name": "knife",
                                    "image": "chefs-knife.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Bake about 50 minutes.",
                            "ingredients": [],
                            "equipment": [],
                            "length": {
                                "number": 50,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Cut into squares once completely cooled and dust with powdered sugar, if desired.Whip cream cheese at medium speed until soft.",
                            "ingredients": [
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 8,
                            "step": "Add sugar, vanilla and egg, blending until smooth. (From this point, refer back to original Red Velvet layer instructions.)",
                            "ingredients": [
                                {
                                    "id": 2050,
                                    "name": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "image": "egg.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "creditsText": "Who Needs a Cape"
        }
    ];

