const classes = require('extends-classes');

const ComponentBase = require('../_base/_ComponentBase.js');
const IBooleanState = require('../_base/IBooleanState.js');

class Switch extends classes(ComponentBase, IBooleanState) {

    __call(method, args) {
        console.log(`'${method}()' is missing!`);
    }

}

module.exports = Switch;
