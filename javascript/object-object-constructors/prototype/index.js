function PrintStaff(myDocs) {
    this.documents = myDocs;
}

PrintStaff.prototype.print = function() {
    console.log(this.documents);
}

let newObj = new PrintStaff("Push it to the limit");
newObj.print();

let myObj = new Object();
console.log(myObj.constructor);

let newAccount = new Account();
console.log(newAccount.constructor);