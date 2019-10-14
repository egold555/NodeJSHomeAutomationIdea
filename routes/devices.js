/*https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes*/

var express = require('express');
var router = express.Router();

var responseUtils = require(".././helpers/response_utilities.js");

var storage_devices = require(".././storage/devices.json");

// Home page route.
router.get('/', function (req, res) {
    responseUtils.success(res, storage_devices);
});

router.post('/', function (req, res) {
    responseUtils.notImplemented(res);
})

module.exports = router;
