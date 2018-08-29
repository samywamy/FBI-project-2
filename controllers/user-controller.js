module.exports = function(db) {

    const usersModel = require('../models/user-model.js')(db);
    const sha256 = require('js-sha256');


    const newForm = (request, response) => {
        response.render('user/register');
    };



    const register = (request, response) => {
    	let params = request.body;
        let name = params.name;
        let email = params.email;
        let password = sha256(params.password);
        let successCallback = (result) => {
            response.cookie('logged_in', 'true');
            response.cookie('user', result.rows[0].id);
            console.log('query result:', result);
            response.redirect('/profile');        	
        };
        let errorCallback = (err) => {
        	console.log('query error:', err.stack);
        };
        usersModel.addUser(name, email, password, successCallback, errorCallback);
    };



    const login = (request, response) => {
    	let params = request.body;
        let email = params.email;
        let password = sha256(params.password);
        let successCallback = (result) => {
            response.cookie('logged_in', 'true');
            response.cookie('user', result.rows[0].id);
            console.log('query result:', result);
            response.redirect('/profile');        	
        };
        let errorCallback = (err) => {
            response.render('error', {errorMsg: err});

        };
        usersModel.loginUser(email, password, successCallback, errorCallback);
    };




    const loginForm = (request, response) => {
    	response.render('user/login');
    };


    const loggedIn = (request, response) => {
        let userId = request.cookies.user;
        let successCallback = (username, userCreatedRecipes, userSavedApiRecipes) => {
            response.render('user/profile', { username: username,
                                              createdRecipes: userCreatedRecipes,
                                              savedRecipes: userSavedApiRecipes });
        };
        let errorCallback = (err) => {
            response.render('error', {errorMsg: err});
        };

        if (request.cookies.logged_in == 'true') {
            usersModel.displayProfile(userId, successCallback, errorCallback);
        } else {
            response.redirect('/login');
        }    
    };


    const logout = (request, response) => {
        response.clearCookie('user');
        response.clearCookie('logged_in');
        response.redirect('/');
    };



    return {
        newForm: newForm,
        register: register,
        login: login,
        loginForm: loginForm,
        logout: logout,
        loggedIn: loggedIn
    };
};



