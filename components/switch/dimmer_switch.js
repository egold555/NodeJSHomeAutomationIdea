const Switch = require('switch.js');
const IDimable = require('../_base/IDimmable.js');

class DimmerSwitch extends classes(Switch, IDimable) {
    
    __call(method, args) {
        console.log(`'${method}()' is missing!`);
    }
    
}

module.exports = DimmerSwitch;