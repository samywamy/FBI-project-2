module.exports = (app, db) => {

	// const user_routes = require('./routes/user-routes.js')(app, db);
	const food_routes = require('./routes/food-routes.js')(app, db);
 //    const pageNotFound = (request, response) => {
 //    	response.status(404);
 //    	response.render('404');
 //    };

	// app.get('*', pageNotFound);
};