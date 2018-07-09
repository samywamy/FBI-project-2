module.exports = function(db) {

	const checkApiCalls = (successCallback, errorCallback) => {
		const queryString = "SELECT COUNT(*) AS number FROM request_times WHERE timestamp >= NOW() - '1 day'::INTERVAL";
	
        db.query(queryString, (err, result) => {
            if (err) {
                errorCallback(err);
            } else {
            	if (result.rows[0].number < 50) {
            		successCallback(result);
            	} else {
            		errorCallback("Too many API calls in the past 24hrs.");
            	}
            }
        });
	};


    const storeRequestTimes = (successCallback, errorCallback) => {
    	const queryString = "INSERT INTO request_times (timestamp) VALUES (NOW())";

        db.query(queryString, (err, result) => {
            if (err) {
                errorCallback(err);
            } else {
            	successCallback(result);
            }
        });
    };


    const withApiKey = (successCallback, errorCallback) => {

    	const ifSuccess = (result) => {
    		const queryString = "SELECT key AS api_key FROM api";
	    	db.query(queryString, (err, result) => {
	            if (err) {
	                errorCallback(err);
	            } else {
	            	successCallback(result.rows[0].api_key);
	            }
	        });
    	};	

    	checkApiCalls(ifSuccess, errorCallback);
    };


	return {
		checkApiCalls: checkApiCalls,
		storeRequestTimes: storeRequestTimes,
		withApiKey: withApiKey
	};

};