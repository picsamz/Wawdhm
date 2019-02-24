var express = require('express');
var router = express.Router();
var darksky = require('../src/darksky');
var wawdhCalculator = require('../src/wawdhm');


/* GET home page. */
router.get('/', function(req, res, next) {
    var wawdhIndex = wawdhCalculator.calculateWawdhIndex(darksky.getWeatherForeCast());
    res.render('index', { wawdhIndex: wawdhIndex });
});

module.exports = router;
