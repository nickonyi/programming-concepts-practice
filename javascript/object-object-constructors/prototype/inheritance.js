function Plant() {
    this.country = "Argentina";
    this.organic = true;
}

Plant.prototype.showNameAndColor = function() {
    console.log("I am a " + this.name + " and my color is " + this.color);
}

Plant.prototype.amIorganic = function() {
    if (this.organic) {
        console.log("I am organic baby!!");
    }
}

function Fruit(name, color) {
    this.name = name;
    this.color = color;
}

Fruit.prototype = new Plant();
let banana = new Fruit("banana", "yellow");
banana.showNameAndColor();
banana.amIorganic();