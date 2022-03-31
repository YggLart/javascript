// function

    function getMilk(money, costPerBottle) {
    
        // Movement
        console.log("leaveHouse");
        console.log("moveRight");
        console.log("moveRight");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveRight");
    
        // How much bottles the money could buy   
    
        // Money paid
        var cost = calcBottles(money, costPerBottle) * costPerBottle;
    
        // Says 
        console.log("buy " + calcBottles(money, costPerBottle) + " bottles of Milk");
        console.log("Paid " + cost + " moneys for it.")
    
        
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveLeft");
        console.log("enterHouse");
    
        return calcChange(money, costPerBottle);
    }

    function calcBottles(startingMoney, costPerBottle) {
        var numberOfBottles = Math.floor(startingMoney / costPerBottle);
        return numberOfBottles
    }

    function calcChange(startingAmount, costPerBottle) {
        var change = startingAmount % costPerBottle;
        return change
    }

// run

    console.log("Hello master, here's your " + getMilk(22, 4) + " change.");