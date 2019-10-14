const _IBase = require('_IBase.js');

class IBooleanState extends IBase {

    constructor() {
        this.state = false;
    }

    getState() {
        return this.state;
    }

    //Valid inputs: "yes", "no", "true", "false", true, false, 1, 0
    setState(stateIn) {
        if(this.isBoolean(stateIn)){
            this.state = stateIn;
        }
        else if(this.isNumber(stateIn) || this.isString(stateIn)) {
            if(stateIn == 1 || stateIn.toLowerCase() === "true" ||  stateIn.toLowerCase() === "on"){
                this.state = true;
            }
            else if(stateIn == 0 || stateIn.toLowerCase() === "false" || stateIn.toLowerCase() === "off"){
                this.state = false;
            }
            else {
               throw new Error("Could not figure out how to parse '" + stateIn + "' as a boolean!"); 
            }
        }
        else {
            throw new Error("Could not figure out how to parse '" + stateIn + "' as a boolean!");
        }
        
    }

}

module.exports = IBooleanState;