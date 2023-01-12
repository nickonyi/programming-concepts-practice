//function Book(title, author, pages, read) {
//    this.title = title;
//    this.author = author;
//    this.pages = pages;
//    this.read = read;
//    this.info = function() {
//        return title + " by " + author + ", " + pages + " pages" + ", " + read;
//    }
//}
//
//const book1 = new Book("The hobbit", "J.R.R Tolkien", 295, "not red yet");
//console.log(book1.info());

//function Prinstaff(myDoc) {
//    this.documents = myDoc;
//}
//
//Prinstaff.prototype.print = function() {
//    console.log(this.documents);
//}
//
//const printo = new Prinstaff("bigmanwolop");
////console.log(printo.constructor);
//
//function Plant() {
//    this.country = "Mexico";
//    this.isOrganic = true;
//}
//
//Plant.prototype.showNameAndColor = function() {
//    console.log("I am an " + this.name + " and my color is " + this.color);
//}
//Plant.prototype.amIOrganic = function() {
//    if (this.isOrganic) {
//        console.log("I am organic baby");
//    }
//}
//
//function Fruit(name, color) {
//    this.name = name;
//    this.color = color;
//}
//
////Fruit.prototype = new Plant();
////const fruit1 = new Fruit("Avacado", "green");
////fruit1.showNameAndColor();
//let animal = {
//    eats: true,
//    walk() {
//        if (!this.isSleeping) {
//            console.log("walk");
//        }
//    },
//    sleep() {
//        this.isSleeping = true;
//    }
//};
//let rabbit = {
//    name: "Spotted Rabbit",
//    __proto__: animal
//
//};
//
//// Object.keys only returns own keys
//alert(Object.keys(rabbit)); // jumps
//
//// for..in loops over both own and inherited keys
//for (let prop in rabbit) alert(prop);

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

alert(pockets.pen);
alert(bed.glasses);