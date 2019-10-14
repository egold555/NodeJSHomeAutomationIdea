const express = require('express');
const app = express();
const port = 3000;

var routes_devices = require('./routes/devices.js');
var routes_device = require('./routes/device.js');

var helpers_responce_utilities = require("./helpers/response_utilities.js");

app.get('/', function (req, res) {
    helpers_responce_utilities.success(res, null, "Hello World! If you see this message, the server is online, and hopefully working!");
});

app.use('/devices', routes_devices);
app.use('/device', routes_device);

//pretty print json
//https://github.com/expressjs/express/issues/2044
//app.set('json spaces', 2);
//only works for send, not for end

//app.use(app.router);


//404 error handler
app.use(function (req, res, next) {
    console.error("404 Occurred. (Generic Handler)"); // Log error message in our server's console
    helpers_responce_utilities.fail404(res, "404 Not Found! (Generic handler)");
});

//500 error handler
app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    helpers_responce_utilities.error(res, err.message);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
