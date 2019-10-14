class IBase {

    isString( in ) {
        if (isNaN( in )) {
            return false;
        }
        return (typeof in === "boolean");
    }

    isNumber( in ) {
        if (isNaN( in )) {
            return false;
        }
        return (typeof in === "number");
    }

    isBoolean( in ) {
        if (isNaN( in )) {
            return false;
        }
        return (typeof in === "boolean");
    }

}

module.exports = IBase;
