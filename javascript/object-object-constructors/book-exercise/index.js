function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(` The ${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
    }
}
const silkyRoad = new Book("silky Road", "Baren Davis", 456, "Not yet read");
silkyRoad.info();

let obj = new Object();
console.log(obj.constructor)