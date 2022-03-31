var days = 365;
var weeks = 52;
var months = 12;

function timeLeft() {
    var age = prompt("Digite sua Idade");
    var saraAge = prompt("Digite a Idade da Sara")
    var deathYear = prompt("Digite a idade quer ver o tempo restante?");
    var yearsLeft = deathYear - age;
    
    var monthsLeft = yearsLeft * 12;
    var weeksLeft = yearsLeft * 52;
    var daysLeft = yearsLeft * 365;

    saraAge = yearsLeft - saraAge;

    console.log("Ainda falta " + daysLeft + " dias, " + weeksLeft + " semanas, e " + monthsLeft + " meses para você ter " + deathYear + " anos.");
    console.log("Quando você tiver " + deathYear + " anos, a Sara terá " + saraAge + " anos.")
}

timeLeft()