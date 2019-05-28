const express = require('express');
let router = express.Router();
let dictionary = require('../models/results.model');

router.get('/dictionary', (req, res)=> {
    dictionary.getAll('dictionary');
})

module.exports = router;
 