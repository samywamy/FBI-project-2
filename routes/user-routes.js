module.exports = (app, db) => {

	const users = require('../controllers/user-controller.js')(db);

	// User registration
	app.get('/register', users.newForm);
	app.post('/register', users.register);
	
	// User login
	app.get('/login', users.loginForm);
	app.post('/login', users.login);
	app.get('/logout', users.logout);
	app.get('/profile', users.loggedIn);

};