//var age = 100;
//
//if (age > 12) {
//    let dogYears = age * 7;
//    console.log(`You are ${dogYears} dog years old!`);
//
//}

//const factoryFunction = String => {
//    const capitalizeString = () => String.toUpperCase();
//    const printString = () => console.log(`----${capitalizeString()}------`);
//    return { printString };
//}
//
//const taco = factoryFunction("taco bell sponser me");
//
//taco.printString();
//
//console.log(taco.capitalizeString())

//const counterCreator = () => {
//    let count = 0;
//    return () => {
//        console.log(count);
//        count++;
//    }
//}
//
//let count = counterCreator();
//
//count();
//count();


import Events from 'eventemitter3';

const object = {};
Object.assign(object, Events.prototype);
object.on("event", payload => console.log(payload));
object.emit("event", "ibambe bwana");