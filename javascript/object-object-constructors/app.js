const myObj = {
    property: 'Wakanda',
    complete: 'Life is this',
    funky: function() {
        console.log('tumeenda funcky buda');
    }
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayMyName = function() {
        console.log(name);
    }
}

const player = new Player("Philip", "P-d-0");
const player2 = new Player("Wonder teh alcie land", "0");

player.sayMyName();
player2.sayMyName();