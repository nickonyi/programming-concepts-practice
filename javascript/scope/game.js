//const Player = (name, level) => {
//    let health = level * 2;
//    const getLevel = () => level;
//    const getName = () => name;
//    const die = () => {
//        console.log("Uh oh You are wasted my friend");
//    }
//    const damage = x => {
//        health -= x;
//        if (health <= 0) {
//            die();
//        }
//    }
//
//    const attack = enemy => {
//        if (level < enemy.getLevel()) {
//            damage(1);
//            console.log(`${enemy.getName()} has damaged ${name}`);
//        } else if (level >= enemy.getLevel()) {
//            enemy.damage(1);
//            console.log(`${name} has damaged ${enemy.getName()}`);
//        }
//    }
//    return { attack, damage, getName, getLevel }
//}
//
//const rambo = Player("Rambo", 4);
//const badGuy = Player("Billie", 5);
//
//rambo.attack(badGuy);
//
//
//
//console.log(rambo.health);

function Boy() {

}
Boy.prototype.getSport = function() {
    console.log("basketball");
};

function Girl(name) {
    this.name = name;
}

Girl.prototype = Object.create(Boy.prototype);

const cynthia = new Girl("Cynthia");
cynthia.getSport();