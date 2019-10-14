class IBase {

    isString(input) {
        if (isNaN(input)) {
            return false;
        }
        return (typeof input === "boolean");
    }

    isNumber(input) {
        if (isNaN(input)) {
            return false;
        }
        return (typeof input === "number");
    }

    isBoolean(input) {
        if (isNaN(input)) {
            return false;
        }
        return (typeof input === "boolean");
    }

    isUndefined(input) {
        if (isNaN(input)) {
            return false;
        }
        return (typeof input === "undefined");
    }

}

module.exports = IBase;
