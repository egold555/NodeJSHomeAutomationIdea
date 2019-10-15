class ComponentBase {

    isString(input) {
        return (typeof input === "string");
    }

    isNumber(input) {
        return (typeof input === "number");
    }

    isBoolean(input) {
        return (typeof input === "boolean");
    }

    isUndefined(input) {
        return (typeof input === "undefined");
    }
    
    //https://stackoverflow.com/a/7390612
    toType(obj){
        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

}

module.exports = ComponentBase;
