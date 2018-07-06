module.exports = function(db) {

    const usersModel = require('../models/user-models.js')(db);
    const sha256 = require('js-sha256');


    const newForm = (request, response) => {
        response.render('user/register');
    };

    const register = (request, response) => {
    	let params = request.body;
        let email = params.email;
        let password = sha256(params.password);
        let successCallback = (result) => {
            console.log('query result:', result);
            response.redirect('/login');        	
        };
        let errorCallback = (err) => {
        	console.log('query error:', err.stack);
        };
        usersModel.addUser(email, password, successCallback, errorCallback);
    };

    const login = (request, response) => {
    	let params = request.body;
        let email = params.email;
        let password = sha256(params.password);
        let successCallback = (result) => {
            response.cookie('logged_in', 'true');
            response.cookie('user', result.rows[0].id);
            console.log('query result:', result);
            response.redirect('/');        	
        };
        let errorCallback = (err) => {
        	response.redirect('/login');
        };
        usersModel.loginUser(email, password, successCallback, errorCallback);
    };

    const loginForm = (request, response) => {
    	response.render('user/login');
    };

    return {
        newForm: newForm,
        register: register,
        login: login,
        loginForm: loginForm
    };
}



