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