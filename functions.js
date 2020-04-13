//Roll D4, D12, and D20
function dieRoll(x) {
    return Math.floor(Math.random() * x) + 0;
}
const dice = {
    name: "Bryan",
    roll: dieRoll
}
const nice = {
    name: "Brett",
    roll: function(x) {
        return Math.floor(Math.random() * x) + 0;
    }
}
class Game {
    constructor() {
        this.inning = 0;
    }
    getInning() {
        return this.inning;
    }
}
class Team {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    getTeamName() {
        return this.name;
    }
    // incrementScore() {
    //     this.score+=1;
    // }
}
const activeGame = new Game();
const homeTeam = new Team("Brett's Jets");
const awayTeam = new Team("Bryan's Lions");

let inningDisplay = document.querySelector('#inningCount');
let homeBtn = document.querySelector('#homeTeamScore');
let awayBtn = document.querySelector('#awayTeamScore');

function homeScore() {
    homeTeam.score += 1;
    homeBtn.textContent = homeTeam.score; 
}

function awayScore() {
    awayTeam.score += 1;
    awayBtn.textContent = awayTeam.score; 
}

function resetGame() {
    homeTeam.score = 0;
    awayTeam.score = 0;
    activeGame.inning = 0;
    homeBtn.textContent = homeTeam.score; 
    awayBtn.textContent = awayTeam.score; 
    inningDisplay.textContent = activeGame.inning;
    localStorage.clear()
}
//Track inning
function incrementInning() {
    activeGame.inning += 1;
    inningDisplay.textContent = activeGame.inning;
}
//Store inning scores in a table

//Store Game in localStorage
function storeGame() {
    localStorage.setItem("homeScore",homeTeam.score);
    localStorage.setItem("awayScore",awayTeam.score);
    localStorage.setItem("inning", activeGame.inning);
}

//Restores a Game
function restoreGame() {
    if (localStorage.getItem("homeScore") === null) {
        homeTeam.score = 0;
        awayTeam.score = 0;
        activeGame.inning = 0;
    } else {
        homeTeam.score =  parseInt(localStorage.getItem("homeScore"));
        awayTeam.score = parseInt(localStorage.getItem("awayScore"));
        activeGame.inning = parseInt(localStorage.getItem("inning"));    
    }
    homeBtn.textContent = homeTeam.score;
    awayBtn.textContent = awayTeam.score;
    inningDisplay.textContent = activeGame.inning;
}

