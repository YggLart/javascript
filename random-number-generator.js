function d6roll() {
    var n = Math.random();
    n = Math.floor( n * 6 ) + 1;            
    return n
}

function loveChance() {
    var n = Math.random();
    n = Math.floor( n * 100 ) + 1;            
    return n
}

// alert("Love Chance Calculator")
// var firstName = prompt("Digite o primeiro nome");
// var secondName = prompt("Digite o segundo nome");

var loveScore = loveChance();
if (loveScore > 70) {
    console.log("Your Score is " + loveScore + "%!" + " You REALLY love each other!");
} else if (loveScore > 30) {
    console.log("Your Score is " + loveScore + "%!" + " It's fine, it's a normal relationship.");
} else {
    console.log("Your Score is " + loveScore + "%..." + " :(");
}

