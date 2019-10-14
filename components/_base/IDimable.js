const IBase = require('./_IBase.js');

class IDimable extends IBase {

    constructor(min, max) {
        super();
        this.min = min;
        this.max = max;
        this.value = this.min;
    }

    setValue(valueIn) {

        if (this.isString(valueIn)) {
            valueIn = parseInt(valueIn);
        } else if (this.isNumber(valueIn)) {
            if (this.value >= this.min && this.value < this.max) {

            } else {
                throw Error(this.value + " is not between " + this.min + " and " + this.max + "!");
            }
        } else {
            throw Error("Input must be a number!");
        }
    }

    getValue() {
        return this.value;
    }

    /*
        setValueFade(newValue, timeInMS){
            
        }
        
        @override from base IFunction potentally?
        //ran every tick of the application. Used for calculating fade values
        loop(){
            
        }
    */

}

module.exports = IDimable;
