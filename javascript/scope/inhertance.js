const person = (name) => {
    const sayName = () => console.log(`my name is chicki chicki ${name}`);
    return { sayName };
}

const nerd = (name) => {
    const { sayName } = person(name);
    const doNerdyStaff = () => console.log("Nerd staff");
    return { sayName, doNerdyStaff };
}

const nick = nerd("Slim shady");

nick.sayName();