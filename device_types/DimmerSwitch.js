const Switch = require('./switch.js');
const ComponentDimmable = require('../components/ComponentDimmable.js');

class DimmerSwitch extends Switch {
    
    constructor(min = 0, max = 1){
        super();
        this.brightness = new ComponentDimmable(min, max);
    }
    
    setBrightness(value){
        this.brightness.setValue(value);
    }
    
    getBrightness(){
        return this.brightness.getValue();
    }
    
}

module.exports = DimmerSwitch;