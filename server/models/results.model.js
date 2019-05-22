const pool = require('../connections').pool;

fuction getResults(request, result){
    pool.query("SELECT * FROM dictionary", (err, result)=> {
        result.send({
            error: err,
            dictionary: result
        });
    })
};

module.exports.getResults = getResults; 
