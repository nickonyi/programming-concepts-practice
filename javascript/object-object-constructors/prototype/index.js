//function PrintStaff(myDocs) {
//    this.documents = myDocs;
//}
//
//PrintStaff.prototype.print = function() {
//    console.log(this.documents);
//}
//
//let newObj = new PrintStaff("Push it to the limit");
//newObj.print();
//
//let myObj = new Object();
//console.log(myObj.constructor);

//function Student() {
//
//}
//
//Student.prototype.sayName = function() {
//    console.log("My name is " + this.name);
//}
//
//function EithGrader(name) {
//    this.name = name;
//    this.grade = "grade 8";
//}
//
//EithGrader.prototype = Object.create(Student.prototype);
//const mato = new EithGrader("mato");
//mato.sayName();
////console.log(mato.grade);
//
//function Student() {
//
//}
//
//Student.prototype.sayName = function() {
//    console.log("My name is " + this.name);
//}
//
//function EithGrader(name) {
//    this.name = name;
//    this.grade = "grade 8";
//}
//
//EithGrader.prototype = Student.prototype;
//
//function NthGrader(name) {
//    this.name = name;
//    this.grade = "Grade 9";
//}
//
//NthGrader.prototype = Student.prototype;
//
//NthGrader.prototype.sayName = function() { console.log("Omwana wefwe"); }
//
//const damian = new EithGrader('damian');
//damian.sayName();
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head

};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.glasses);

function Pinterest(name, age) {
    this.name = name;
    this.age = age;
}