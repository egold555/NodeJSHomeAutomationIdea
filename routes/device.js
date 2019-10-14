/*https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes*/

var express = require('express');
var router = express.Router();

var responseUtils = require(".././helpers/response_utilities.js");

var storage_devices = require(".././storage/devices.json");


// Home page route.
router.delete('/:identifier?', function (req, res) {
    if (req.params.identifier) {
        var index = getDeviceIndexByIdentifier(req.params.identifier);
        if(index == null){
            responseUtils.fail404(res, "Device with id '" + req.params.identifier + "' was not found!");
            return;
        }
        storage_devices.splice(index, 1);
        //somehow save this to the json?
         responseUtils.success(res, null, "Successfully deleted '" + req.params.identifier + "'.");
    } 
    else {
        responseUtils.fail(res, "Paramater identifier needs to be passed in the url");
       
    }

});

router.get('/:identifier?', function (req, res) {
    if (req.params.identifier) {

        var found = findDevice(req.params.identifier);
        if(found == null){
            responseUtils.fail404(res, "Device with id '" + req.params.identifier + "' was not found!");
        }
        else {
            responseUtils.success(res, found)
        }

    } 
    else {
        responseUtils.fail("Paramater identifier needs to be passed in the url");
    }
});

function findDevice(identifierIn) {
    
    for(var i = 0; i < storage_devices.length; i++){
        var device = storage_devices[i];
        var identifier = device.identifier;
        
        if (identifier.toUpperCase() === identifierIn.toUpperCase()) {
            return device;
        }
    }
    
    return null;
}

function getDeviceIndexByIdentifier(identifierIn){
    for(var i = 0; i < storage_devices.length; i++){
        var device = storage_devices[i];
        var identifier = device.identifier;
        
        if (identifier.toUpperCase() === identifierIn.toUpperCase()) {
            return i;
        }
    }
    
    return null;
}

module.exports = router;
