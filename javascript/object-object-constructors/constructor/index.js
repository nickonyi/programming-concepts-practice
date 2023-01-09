let proto = {
    protocrop: "protocrop"
};

function C() {
    this.cprop = "cprop";
}
C.prototype = proto;

function F() {
    this.fprop = "fprop";
}
F.prototype = proto;

let f = new F();
let c = new C();


console.log(f.protocrop);
console.log(f.fprop);
console.log(f.cprop);
console.log(f instanceof F);
console.log(c.constructor === C);