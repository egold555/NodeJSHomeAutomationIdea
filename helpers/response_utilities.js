module.exports = {
    
    success(res, data, message = null) {
        this.sendResponse(res, "success", 200, data, message);
    },
    
    fail(res, message) {
        this.sendResponse(res, "fail", 400, null, message);
    },
    
    fail404(res, message) {
        this.sendResponse(res, "fail", 404, null, message);
    },
    
    error(res, message) {
        this.sendResponse(res, "error", 500, null, message);
    },
    
    notImplemented(res) {
        this.fail(res, "Not implemented yet!");
    },
    
    sendResponse(res, status, statusCode, data, message){
        var object = new Object();
        object.status = status;
        object.data = (data == null ? {} : data);
        object.message = (message == null ? "" : message);
        res.status(statusCode);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(object));
    }
};
