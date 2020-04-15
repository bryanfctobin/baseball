//Classes
class Game {
    constructor() {
        this.inning = 0;
        this.homeTeam;
        this.awayTeam;
    }
    getInning() {
        return this.inning;
    }
    incrementInning() {
        this.inning+=1;
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
    incrementScore() {
        this.score+=1;
    }
}
//Variables
const inningDisplay = document.querySelector('#inningCount');
const homeBtn = document.querySelector('#homeTeamScore');
const awayBtn = document.querySelector('#awayTeamScore');
const gameArea = document.querySelector('#gameSection');
const homeTeamName = document.querySelector('#homeTeamName');
const awayTeamName = document.querySelector('#awayTeamName');
const homeScoreButton = document.querySelector('#homeScoreButton');
const awayScoreButton = document.querySelector("#awayScoreButton");
let activeGame;
// let homeTeam = new Team("Brett's Jets");
// let awayTeam = new Team("Bryan's Lions");   
//Event Handlers
homeScoreButton.addEventListener("click", function() {
    homeTeam.incrementScore();
    homeBtn.textContent = homeTeam.score; 
})
awayScoreButton.addEventListener("click", function() {
    awayTeam.incrementScore();
    awayBtn.textContent = awayTeam.score; 
})
function resetGame() {
    homeTeam.score = 0;
    awayTeam.score = 0;
    activeGame.inning = 0;
    homeBtn.textContent = homeTeam.score; 
    awayBtn.textContent = awayTeam.score; 
    inningDisplay.textContent = activeGame.inning;
    localStorage.clear()
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
    gameArea.style.display = "inline";
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
function homeScore() {
    homeTeam.score += 1;
    homeBtn.textContent = homeTeam.score; 
}
function awayScore() {
    awayTeam.score += 1;
    awayBtn.textContent = awayTeam.score; 
}
//Track inning
function incrementInning() {
    activeGame.inning += 1;
    inningDisplay.textContent = activeGame.inning;
}
//Starts a New Game
function startNewGame() {
    gameArea.style.display = "inline";
    let htn = prompt("Home Team", "Home Team");
    let atn = prompt("Away Team", "Away Team");
    let homeTeam = new Team(htn);
    let awayTeam = new Team(atn);   
    activeGame = new Game();
    activeGame.homeTeam = homeTeam;
    activeGame.awayTeam = awayTeam;
    console.log("success");
    return activeGame;
}
//Not being used
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