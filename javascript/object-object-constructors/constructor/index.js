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

console.log(f.protocrop);
console.log(f.fprop);
console.log(f.cprop);
console.log(f instanceof F);