const DeviceBase = require('./DeviceBase.js');
const ComponentBooleanState = require('../components/ComponentBooleanState.js');

class Outlet extends DeviceBase {

    constructor(){
        super();
        this.state = new ComponentBooleanState(false);
    }
    
    setState(value){
        this.state.setState(value);
    }
    
    getState(){
        return this.state.getState();
    }

}

module.exports = Outlet;
