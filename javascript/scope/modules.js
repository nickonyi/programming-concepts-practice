const myModule = (function() {
    let _privateProperty = "Arsenal";
    let publicProperty = "Barcelona";

    function _privateMethod() {
        console.log(_privateProperty);
    }

    function publicMethod() {
        _privateMethod();
    }
    return { publicProperty, publicMethod }
}());

myModule.publicMethod();
console.log(myModule.publicProperty);

console.log(myModule._privateProperty);