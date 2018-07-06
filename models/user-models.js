module.exports = function(db) {

    const addUser = (email, password, successCallback, errorCallback) => {

        const queryString = 'INSERT INTO users(email, password_hash) VALUES($1, $2)';
        const values = [email, password];

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
	                errorCallback(err);
                } else {
	                successCallback(result);
                }
            }
	    });
	};


    return {
        addUser : addUser,
        loginUser: loginUser
    };
};
