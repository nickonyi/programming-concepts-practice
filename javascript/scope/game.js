const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName = () => name;
    const die = () => {
        console.log("Uh oh You are wasted my friend");
    }
    const damage = x => {
        health -= x;
        if (health <= 0) {
            die();
        }
    }

    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        } else if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    }
    return { attack, damage, getName, getLevel }
}

const Rambo = Player("Rambo", 4);
const badGuy = Player("Billie", 5);

Rambo.attack(badGuy);