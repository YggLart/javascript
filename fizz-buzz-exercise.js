    // var n = Math.floor((Math.random() * 100) + 1);
    
    // if (n % 3 === 0 && n % 5 === 0) {
    //     console.log("FizzBuzz");
    //     } 
    
    // else if (n % 3 === 0) {
    //     console.log("Fizz");
    //     } 

    // else if (n % 5 === 0) {
    //         console.log("Buzz");
    //         } 

    // else {
    //         console.log(n)
    //         }


var n = 0;
var output = [];

function fizzBuzz() {

    while( n <= 100 )
    
    n++ // add +1 

    // check if divisibe by 3 and 5 
    if (n % 3 === 0 && n % 5 === 0) {
        output.push("FizzBuzz")
        }

    // check if divisibe by 3 
    else if (n % 3 === 0) {
        output.push("Fizz");
        } 

    // check if divisibe by 5
    else if (n % 5 === 0) {
        output.push("Buzz");
        } 

    // normal number
    else {
        output.push(n)
        }
    
    console.log(output)
}

fizzBuzz();