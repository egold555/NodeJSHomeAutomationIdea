const ComponentBase = require('../_base/_ComponentBase.js');
const IBooleanState = require('../_base/IBooleanState.js');
const IBase = require('../_base/_IBase.js');

class Switch extends ComponentBase {

    constructor(defaultState = false){
        super();
        this.state = new IBooleanState(defaultState);
    }

    setState(value) {
        this.state.setState(value);
    }

    getState() {
        return this.state.getState();
    }

}

module.exports = Switch;
