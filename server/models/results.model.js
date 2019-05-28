const pool = require('../connections').pool;

    function getAll(req, res){
        pool.query("SELECT word, description, id FROM dictionary", (err, result)=>{
            res.send({
               error: err,
             dictionary: result
            })
        })
        console.log(dictionary);
    }
    module.exports.getAll = getAll;