const express = require('express');
let router = express.Router();
let results = ('../models/results.model');


router.get('/results', (request, result)=> {
    results.getResults(request, result);
})

module.exports = router;