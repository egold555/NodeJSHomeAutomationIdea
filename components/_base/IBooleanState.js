class IBooleanState {

    constructor() {
        this.state = false;
    }

    getState() {
        return this.state;
    }

    //Valid inputs: "yes", "no", "true", "false", true, false, 1, 0
    setState(stateIn) {
        if(typeof stateIn === "boolean"){
            this.state = stateIn;
        }
        else if(typeof stateIn === "number" || typeof stateIn == "string") {
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