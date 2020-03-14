const request = require('request')

module.exports = {
    /*
    ** This method returns a promise
    ** which gets resolved or rejected based
    ** on the result from the API
    */
    makeApiCall : function(url) {
        return new Promise((resolve, reject) => {
            request({
                url: url,
                headers: {Authorization: 'Bearer ' + process.env.AUTH_TOKEN}},
                (err, res, body) => {
                    if (err) reject(err)
                    resolve(body)
                }
            );
        })
    }
}