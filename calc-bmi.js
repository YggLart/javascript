function bmiCalculator(weight, height) {
    
    var bmiResult = weight / Math.pow(height, 2) // calc

    if (bmiResult < 18.5) {
        return "Your BMI is " + bmiResult + ", so you are underweight.";
    }  else if (bmiResult > 18.5 && bmiResult < 24.9) {
        return "Your BMI is " + bmiResult + ", so you have a normal weight.";
    } 
    else {
        return "Your BMI is " + bmiResult + ", so you are overweight.";
    }
    
}