module.exports = function(db) {

    const addUser = (name, email, password, successCallback, errorCallback) => {

        const queryString = 'INSERT INTO users(name, email, password_hash) VALUES($1, $2, $3)';
        const values = [name, email, password];

        db.query(queryString, values, (err, result) => {
            if (err) {
                errorCallback(err);
            } else {
                successCallback(result);
            }
        });
	};



    const loginUser = (email, password, successCallback, errorCallback) => {

    	const queryString = 'SELECT * FROM users where email = $1 AND password_hash = $2';
    	const values = [email, password];

        db.query(queryString, values, (err, result) => {
            if (err) {
                errorCallback(err);
            } else {
                if (result.rows.length == 0) {
	                errorCallback("Login failed. Please try again.");
                } else {
	                successCallback(result);
                }
            }
	    });
	};



    const displayProfile = (userId, successCallback, errorCallback) => {
        const queryString = 'SELECT name FROM users WHERE id = $1';
        const values = [userId];

        db.query(queryString, values, (err, result) => {
            if (err) {
                errorCallback(err);
            } else {
                let username = result.rows[0].name;

                const queryString = 'SELECT id, title FROM user_created_recipes WHERE user_id = $1';
                const values = [userId];
                db.query(queryString, values, (err, result) => {
                    if (err) {
                        errorCallback(err);
                    } else {
                        let userCreatedRecipes = result.rows;
                        const queryString = 'SELECT api_id, title FROM user_saved_recipes WHERE user_id = $1';
                        const values = [userId];
                        db.query(queryString, values, (err, result) => {
                            if (err) {
                                errorCallback(err);
                            } else {
                                let userSavedRecipes = result.rows;
                                successCallback(username, userCreatedRecipes, userSavedRecipes);
                            } 
                        });
                    }
                });
            }
        });
    };


    return {
        addUser : addUser,
        loginUser: loginUser,
        displayProfile: displayProfile
    };
};
