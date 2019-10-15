var express = require('express');
var router = express.Router();
var responseUtils = require(".././helpers/response_utilities.js");

const Switch = require('.././device_types/Switch.js');
const DimmerSwitch = require('.././device_types/DimmerSwitch.js');
const Outlet = require('.././device_types/Outlet.js');

var testSwitch = new Switch();
var testDimmerSwitch = new DimmerSwitch();
var testOutlet = new Outlet();


router.get('/', function (req, res) {
    responseUtils.successMessage(res, "Sucessully get /test/ route!");
});

router.get('/set/:device/:value', function (req, res) {
    var device = req.params.device;
    var value = req.params.value;
    
    if(device === 'switch'){
        testSwitch.setState(value);
    }
    else if(device === 'dimmerswitch'){
        testDimmerSwitch.setState(value);
    }
    else if(device === 'outlet'){
        testOutlet.setState(value);
    }
    else {
        responseUtils.fail404(res, "Test device '" + device + "' not found");
    }
    
    
    responseUtils.success(res, testSwitch.getState());
});

router.get('/get/:device', function (req, res) {
    
    var device = req.params.device;
    
    if(device === 'switch'){
        responseUtils.success(res, testSwitch.getState());
    }
    else if(device === 'dimmerswitch'){
        responseUtils.success(res, testDimmerSwitch.getState());
    }
    else if(device === 'outlet'){
        responseUtils.success(res, testOutlet.getState());
    }
    else {
        responseUtils.fail404(res, "Test device '" + device + "' not found");
    }
    
    
});

module.exports = router;