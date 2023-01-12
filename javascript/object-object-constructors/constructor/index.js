let proto = {
    protocrop: "protocrop"
};

function C() {
    this.cprop = "cprop";
}
//C.prototype = proto;
//
//function F() {
//    this.fprop = "fprop";
//}
//F.prototype = proto;
//
//let f = new F();
//let c = new C();
//
//
//console.log(f.protocrop);
//console.log(f.fprop);
//console.log(f.cprop);
//console.log(f instanceof F);
//console.log(c.constructor === Object);

//function myObject(data) {
//    let obj = Object.create(myObject.proto);
//    obj.data = data;
//    return obj;
//}
//
//myObject.proto = {
//    getData: function() {
//        return this.data;
//    }
//}
//
//let obij = myObject("wakawakaeeeeb h");
//console.log(obij.data);

//function personFactory(name, age) {
//    const sayHello = () => console.log(name + " " + age + " hello");
//    return { name, age, sayHello };
//}
//
//const jeff = personFactory("jeff", 27);
//console.table(jeff);
//jeff.sayHello();

//const name = "Maynard";
//const color = "red";
//const number = 34;
//const food = "rice";
//
//// logging all of these variables might be a useful thing to do,
//// but doing it like this can be somewhat confusing.
//console.log(name, color, number, food); // Maynard red 34 rice
//
//// if you simply turn them into an object with brackets,
//// the output is much easier to decipher:
//console.table({ name, color, number, food });
//// { name: 'Maynard', color: 'red', number: 34, food: 'rice' }


let a = 2;

function foo() {
    a = 5;

    function bar() {
        a = 7;
        console.log(a);
    }
    bar();
}
foo();

console.log(a);