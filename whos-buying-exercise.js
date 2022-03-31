    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    function buyLunch() {
        
        var random = Math.floor( (Math.random() *  names.length) );
        var randomEnd = random + 1;
        var select = names.slice(random, randomEnd);
        
        console.log(select + " is going to buy lunch today!");
    }

    buyLunch();

// Solução de aluno Udemy
    function buyLunch2() {
        return names [Math.floor(Math.random()*names.length)] + " is going to buy lunch today!";
    }