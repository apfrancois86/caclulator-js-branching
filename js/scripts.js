// backend basic math operations
var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
}
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};
var modulo = function(number1, number2) {
	return number1 % number2;
};
//  remove floating zeros from frontend content to display function
	var display = function(calculation) {
		return Number(calculation.toFixed(8));
};
// Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
// User input numbers
	//Add Function
	$("form#input").submit(function(event){
		event.preventDefault();
		var number1 = parseFloat($("#input1").val());
		var number2 = parseFloat($("#input2").val());
		var operator = $("input:radio[name=operator]:checked").val();
		var result;
		if (operator === "add") {
			result = add(number1, number2);
		} else if (operator === "subtract") {
			result = subtract(number1, number2);
		} else if (operator === "multiply") {
			result = multiply(number1, number2);
		} else if (operator === "divide") {
			result = divide(number1, number2);
		} else if (operator === "modulo") {
			result = modulo(number1, number2);
		}
	$("#output").text(display(result));
	});


});














//custom math functions
// var heightInInches = function(heightFeet, heightInches) {
// 	return heightFeet * 12 + heightInches;
// };
// var bmi = function (weight, heightInInches) {
// 	return ((weight * 703) / Math.pow(heightInInches(heightFeet, heightInches), 2));
// };


//
// alert("The difference between " + number1 + " and " + number2 + " is " + display(subtract(number1, number2)));
//
// alert("The product of " + number1 + " and " + number2 + " is " + display(multiply(number1, number2)));
//
// alert("The quotient of " + number1 + " and " + number2 + " is " + display(divide(number1, number2)));
//
// alert("The remainder of " + number1 + " and " + number2 + " is " + display(modulo(number1, number2)));

//custom display message
// alert("bmi is: " + Number(bmi(weight, heightInInches).toFixed(3)));

// Fahrenheit and Celsius
// var tempF = parseFloat(prompt("What temperature do you want to convert [F-C]"));
//
// var tempC = parseFloat(prompt("What temperature do you want to convert [C-F]"));

var fahrToCels = function(temp) {
	return (temp - 32) * (5 / 9);
};

var celsToFahr = function(temp) {
	return (temp / (5 / 9) + 32);
};
//
// alert(display(fahrToCels(tempF)));
// alert(display(celsToFahr(tempC)));

// var gallons = parseFloat(prompt("How many gallons?"));

var galToLit = function(gallons) {
	return gallons / .26417;
};

// alert(display(galToLit(gallons)));

// var liters = parseFloat(prompt("How many liters?"));

var litToGal = function(liters) {
	return liters * .26417;
}
