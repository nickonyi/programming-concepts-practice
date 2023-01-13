//const person = (name) => {
//    const sayName = () => console.log(`my name is chicki chicki ${name}`);
//    return { sayName };
//}
//
//const nerd = (name) => {
//    const proto = person(name);
//    const { sayName } = person(name);
//    const doNerdyStaff = () => console.log("Nerd staff");
//    return Object.assign({}, proto, { doNerdyStaff });
//}
//
//const nick = nerd("Slim shady");
//nick.sayName();
//nick.doNerdyStaff();



//const target = { a: 1, b: 2 };
//const source = { c: 3, d: 4 };
//
//const returnObj = Object.assign(source, target);
//console.table(returnObj);

const proto = {
    hello: function() {
        return `Hello my name is ${this.name}`;
    }
}

const nick = Object.assign({}, proto, { name: "nick" });

const msg = nick.hello();

console.log(msg);