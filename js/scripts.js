
// User input numbers
// var number1 = parseFloat(prompt("Enter a number:"));
// var number2 = parseFloat(prompt("Enter another number:"));

//custom user input
var weight = parseFloat(prompt("Enter your weight in pounds:"));
var heightFeet = parseFloat(prompt("Enter your height in feet (you will add inches next):"));
var heightInches = parseFloat(prompt("Enter your height in inches: "));

// backend basic math operations
// var add = function(number1, number2) {
// 	return number1 + number2;
// };
// var subtract = function(number1, number2) {
//   return number1 - number2;
// }
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
// var modulo = function(number1, number2) {
// 	return number1 % number2;
// };

//custom math functions
var heightInInches = function(heightFeet, heightInches) {
	return heightFeet * 12 + heightInches;
};
var bmi = function (weight, heightInInches) {
	return ((weight * 703) / Math.pow(heightInInches(heightFeet, heightInches), 2));
};


// frontend content to display

// var sum = Number(add(number1, number2).toFixed(8));
// var difference = Number(subtract(number1, number2).toFixed(8));
// var product = Number(multiply(number1, number2).toFixed(8));
// var quotient = Number(divide(number1, number2).toFixed(8));
// var remainder = Number(modulo(number1, number2).toFixed(8));

// var fixedQuotient = quotient.toFixed(3)
// var noTrailing = Number(fixedQuotient);
// var testNoTrailing = Number(quotient.toFixed)
// alert(typeof(noTrailing) + " " + noTrailing);

//frontend display message

// alert("The sum of " + number1 + " and " + number2 + " is " + sum);
// alert("The difference between " + number1 + " and " + number2 + " is " + difference);
// alert("The product of " + number1 + " and " + number2 + " is " + product);
// alert("The quotient of " + number1 + " and " + number2 + " is " + quotient);
// alert("The remainder of " + number1 + " and " + number2 + " is " + remainder);

//custom display message
alert("bmi is: " + Number(bmi(weight, heightInInches).toFixed(3)));
