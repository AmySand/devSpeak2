let express = require('express');
let router = express.Router();
let result = require('../models/results.model');

router.get('/', (req, res)=> {
    result.getAll(req,res);

})

module.exports = router;
 