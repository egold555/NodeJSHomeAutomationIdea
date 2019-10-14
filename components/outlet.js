const ComponentBase = require('./_base/_ComponentBase.js');
const IBooleanState = require('./_base/IBooleanState.js');

class Outlet extends ComponentBase {

    constructor(){
        super();
        this.state = new IBooleanState(false);
    }
    
    setState(value){
        this.state.setState(value);
    }
    
    getState(){
        return this.state.getState();
    }

}

module.exports = Outlet;
