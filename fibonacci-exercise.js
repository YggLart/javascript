
    function fibonacciGenerator(n) {
        
        var count = [];
        var oldNumber = -1; // defines first number
        var newNumber = 1; // defines second number
        var sum = oldNumber + newNumber;
        
        for (var i = 0; i < n; i++) { // for loop, count the number used in function
                
                sum = oldNumber + newNumber;
            
                count.push(sum); // push sum of both numbers
                
                oldNumber = newNumber; // push second number to first variable
                newNumber = sum; // sum first and second numbers
                
               
            
        }

         return count // print result
    }

fibonacciGenerator(15)