//Classes
class Game {
    constructor() {
        this.inning = 1;
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
const gameArea = document.querySelectorAll('.gameSection');
const homeTeamName = document.querySelectorAll('.homeTeamName');
const awayTeamName = document.querySelectorAll('.awayTeamName');
const homeScoreButton = document.querySelector('#homeScoreButton');
const awayScoreButton = document.querySelector("#awayScoreButton");
const newGameButton = document.querySelector("#startNewGameBtn");
const lastScore = {
    home:0,
    away:0
}
let activeGame;
//Event Handlers
homeScoreButton.addEventListener("click", function() {
    activeGame.homeTeam.score = activeGame.homeTeam.score + 1;
    homeBtn.textContent = activeGame.homeTeam.score; 
})
awayScoreButton.addEventListener("click", function() {
    activeGame.awayTeam.incrementScore();
    awayBtn.textContent = activeGame.awayTeam.score; 
})
function resetGame() {
    activeGame.homeTeam.score = 0;
    activeGame.awayTeam.score = 0;
    activeGame.inning = 1;
    homeBtn.textContent = activeGame.homeTeam.score; 
    awayBtn.textContent = activeGame.awayTeam.score; 
    homeTeamName.forEach((n)=>{
        n.textContent = activeGame.homeTeam.name;
    });
    awayTeamName.forEach((n)=>{
        n.textContent = activeGame.awayTeam.name;
    })
    inningDisplay.textContent = activeGame.inning;
}
//Store Game in localStorage
function storeGame() {
    localStorage.setItem('activeGame', JSON.stringify(activeGame));
    alert("Game is saved!")
}
//Restores a Game
function restoreGame() { 
    gameArea.forEach((n)=>{
        n.style.display = "inline";
    });
    if (localStorage.getItem('activeGame') === null) {
        alert("No saved game, starting a new game!");
        startNewGame();
    } else {
        restoredGame = JSON.parse(localStorage.getItem('activeGame'));
        let h = restoredGame.homeTeam.name;
        let a = restoredGame.awayTeam.name;
        let homeTeam = new Team(h);
        let awayTeam = new Team(a);
        activeGame = new Game();
        activeGame.homeTeam = homeTeam;
        activeGame.awayTeam = awayTeam;
        activeGame.homeTeam.score = restoredGame.homeTeam.score;
        activeGame.awayTeam.score = restoredGame.awayTeam.score;
        activeGame.inning = restoredGame.inning;
    }
    homeBtn.textContent = activeGame.homeTeam.score;
    awayBtn.textContent = activeGame.awayTeam.score;
    homeTeamName.forEach((n)=>{
        n.textContent = activeGame.homeTeam.name;
    });
    awayTeamName.forEach((n)=>{
        n.textContent = activeGame.awayTeam.name;
    })
    inningDisplay.textContent = activeGame.inning;
}
//Track inning
function incrementInning() {
    if (activeGame.inning >= 9) {
        alert("Game Over");
    } else {
        activeGame.inning += 1;
        inningDisplay.textContent = activeGame.inning;
    }
}
//Starts a New Game
function startNewGame() {
    gameArea.forEach((n)=>{
        n.style.display = "inline";
    });
    let htn = prompt("Home Team");
    let atn = prompt("Away Team");
    let homeTeam = new Team(htn);
    let awayTeam = new Team(atn);   
    activeGame = new Game();
    activeGame.homeTeam = homeTeam;
    activeGame.awayTeam = awayTeam;
    homeTeamName.forEach((n)=>{
        n.textContent = activeGame.homeTeam.name;
    });
    awayTeamName.forEach((n)=>{
        n.textContent = activeGame.awayTeam.name;
    })
    homeBtn.textContent = activeGame.homeTeam.score;
    awayBtn.textContent = activeGame.awayTeam.score;
    inningDisplay.textContent = activeGame.inning;
    console.log("success");
    return activeGame;
}
//Store inning scores in a table
function updateTable() {
    let activeInning = activeGame.getInning();
    let homeScoreID = "#hs" + activeInning;
    let awayScoreID = "#as" + activeInning;
    document.querySelector(homeScoreID).textContent = activeGame.homeTeam.score - lastScore.home;
    document.querySelector(awayScoreID).textContent = activeGame.awayTeam.score - lastScore.away;
    lastScore.home = activeGame.homeTeam.score;
    lastScore.away = activeGame.awayTeam.score;
    return lastScore;
}