const Person = name => {
    const sayName = () => console.log(`Hello ${name}`);
    const sayAge = () => console.log(`I am 22 years old`);
    return { sayName, sayAge }
}

const Nerd = (name) => {
    const proto = Person(name);
    const sayNerdStaff = () => console.log(`I,${name},I am a nerd`);
    const sayNerdAge = () => console.log("The nerd is 22 years old");
    return Object.assign({}, proto, { sayNerdStaff, sayNerdAge });
}


const nick = Nerd("nick");
nick.sayName();
nick.sayAge();
nick.sayNerdStaff();
nick.sayNerdAge();