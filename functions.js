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
//UI
const inningDisplay = document.querySelector('#inningCount');
const homeBtn = document.querySelector('#homeTeamScore');
const awayBtn = document.querySelector('#awayTeamScore');
const gameArea = document.querySelector('#gameSection');
const homeTeamName = document.querySelector('#homeTeamName');
const awayTeamName = document.querySelector('#awayTeamName');
const homeScoreButton = document.querySelector('#homeScoreButton');
const awayScoreButton = document.querySelector("#awayScoreButton");
let activeGame;
//Event Handlers
homeScoreButton.addEventListener("click", function() {
    activeGame.homeTeam.incrementScore();
    homeBtn.textContent = activeGame.homeTeam.score; 
})
awayScoreButton.addEventListener("click", function() {
    activeGame.awayTeam.incrementScore();
    awayBtn.textContent = activeGame.awayTeam.score; 
})
function resetGame() {
    let htn = prompt("Home Team", "Home Team");
    let atn = prompt("Away Team", "Away Team");
    let homeTeam = new Team(htn);
    let awayTeam = new Team(atn);   
    activeGame = new Game();
    activeGame.homeTeam = homeTeam;
    activeGame.awayTeam = awayTeam;
    activeGame.homeTeam.score = 0;
    activeGame.awayTeam.score = 0;
    activeGame.inning = 0;
    homeBtn.textContent = activeGame.homeTeam.score; 
    awayBtn.textContent = activeGame.awayTeam.score; 
    homeTeamName.textContent = activeGame.homeTeam.name;
    awayTeamName.textContent = activeGame.awayTeam.name;
    inningDisplay.textContent = activeGame.inning;
    localStorage.clear()
}
//Store Game in localStorage
function storeGame() {
    localStorage.setItem("homeScore",activeGame.homeTeam.score);
    localStorage.setItem("htn", activeGame.homeTeam.name);
    localStorage.setItem("awayScore",activeGame.awayTeam.score);
    localStorage.setItem("atn", activeGame.awayTeam.name);
    localStorage.setItem("inning", activeGame.inning);
    alert("Game is saved!")
}
//Restores a Game
function restoreGame() { 
    activeGame = new Game();
    gameArea.style.display = "inline";
    if (localStorage.getItem("homeScore") === null) {
        alert("No saved game, starting a new game!");
        activeGame.homeTeam = new Team();
        activeGame.awayTeam = new Team();
        activeGame.homeTeam.name = prompt("Home Team", "Home Team");
        activeGame.awayTeam.name = prompt("Away Team", "Away Team");
        activeGame.homeTeam.score = 0;
        activeGame.awayTeam.score = 0;
        activeGame.inning = 0;
    } else {
        activeGame.homeTeam = new Team();
        activeGame.awayTeam = new Team();
        activeGame.homeTeam.score =  parseInt(localStorage.getItem("homeScore"));
        activeGame.homeTeam.name = localStorage.getItem("htn");
        activeGame.awayTeam.score = parseInt(localStorage.getItem("awayScore"));
        activeGame.awayTeam.name = localStorage.getItem("atn");
        activeGame.inning = parseInt(localStorage.getItem("inning"));    
    }
    homeBtn.textContent = activeGame.homeTeam.score;
    awayBtn.textContent = activeGame.awayTeam.score;
    homeTeamName.textContent = activeGame.homeTeam.name;
    awayTeamName.textContent = activeGame.awayTeam.name;
    inningDisplay.textContent = activeGame.inning;
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
    homeTeamName.textContent = activeGame.homeTeam.name;
    awayTeamName.textContent = activeGame.awayTeam.name;
    homeBtn.textContent = activeGame.homeTeam.score;
    awayBtn.textContent = activeGame.awayTeam.score;
    inningDisplay.textContent = activeGame.inning;
    console.log("success");
    return activeGame;
}
//To-do
//Store inning scores in a table