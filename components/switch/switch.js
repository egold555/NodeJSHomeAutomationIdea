const ComponentBase = require('.././componentBase.js');

class Switch extends ComponentBase {
    
    var state = false;  

    function getState(){
        return this.state;
    }

    function setState(stateIn){
        this.state = stateIn;
    }
    
}

module.exports = Switch;