class ComponentBase {
    
    /*Mutiple extends classes override function.*/
    __call(method, args) {
        console.log(`'${method}()' is missing!`);
    }
    
}

module.exports = ComponentBase;