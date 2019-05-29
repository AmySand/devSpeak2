const pool = require('../connections').pool;

    function getAll(req, res){
        pool.query("SELECT * FROM dictionary", (err, result)=>{
            res.send({
               error: err,
             dictionary: result
            }) 
             
        })
        console.log(res);
    }
  
    module.exports.getAll = getAll;