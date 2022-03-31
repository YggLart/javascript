function isLeap(year) {
    var divisibleByFour = year % 4;
    var divisibleByHundred = year % 100;
    var divisibleByFourHundred = year % 400;
    
    if (divisibleByFour === 0) {
        if (divisibleByHundred === 0) {
            if (divisibleByFourHundred === 0) {
              return "Leap year."  
            } else {
                return "Not leap year."
            }
            return "Not leap year."
        }
        return "Leap year."
    } else {
        return "Not leap year."
    }
}

isLeap(2024)