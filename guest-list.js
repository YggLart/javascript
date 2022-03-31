    var myName = prompt("Digite seu nome.")
    var guestList = ["Ygor", "Byanca", "Link", "Marcella", "Celso"]

    if (guestList.includes(myName)) {
        console.log("Welcome, " + myName);
    } else {
        console.log("Sorry, your name's not on the list.");
    }
    