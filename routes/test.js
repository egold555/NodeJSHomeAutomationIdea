var express = require('express');
var router = express.Router();
var responseUtils = require(".././helpers/response_utilities.js");

const Switch = require('.././components/switch/switch.js');
const DimmerSwitch = require('.././components/switch/dimmer_switch.js');
const Outlet = require('.././components/outlet.js');

var testSwitch = new Switch();
var testDimmerSwitch = new DimmerSwitch();
var testOutlet = new Outlet();


router.get('/', function (req, res) {
    responseUtils.successMessage(res, "Sucessully get /test/ route!");
});

router.get('/set/:value', function (req, res) {
    var value = req.params.value;
    testSwitch.setState(value);
    responseUtils.success(res, testSwitch.getState());
});

router.get('/get/', function (req, res) {
    responseUtils.success(res, testSwitch.getState());
});

module.exports = router;