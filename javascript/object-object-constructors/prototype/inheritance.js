function Plant() {
    this.country = "Argentina";
    this.organic = true;
}

Plant.prototype.showNameAndColor = function() {
    console.log("I am " + this.name + "and my color is" + this.color);
}

Plant.prototype.amIorganic = function() {
    if (this.organic) {
        console.log("I am organic baby!!");
    }
}