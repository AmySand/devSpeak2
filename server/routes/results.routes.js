let express = require('express');
let router = express.Router();
let result = require('../models/results.model');

router.get('/results', (req, res)=> {
    result.getAll(req,res);

})

module.exports = router;
 