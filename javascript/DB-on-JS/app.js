const person = {
    name: "Mobbdeep",
    age: 45,
    gender: "Male"
}

const personToJSON = JSON.stringify(person);
localStorage.setItem("person", personToJSON);

const personJSON = localStorage.getItem("person");
const JsontoPerson = JSON.parse(personJSON);
console.log(JsontoPerson);

localStorage.removeItem("person");