// Function declaration
function add1(num1, num2) {
	return num1 + num2;
}

function multiply1(num1, num2) {
	return num1 * num2;
}

// Function expression
let add2 = function(num1, num2) {
	return num1 + num2;
};

let multiply2 = function(num1, num2) {
	return num1 * num2;
};

// Arrow function
let add3 = (num1, num2) => num1 + num2;
let multiply3 = (num1, num2) => num1 * num2;

let number1 = 36325;
let number2 = 9824;
let number3 = 777;

console.log(add1(multiply1(number1, number2), number3)); // 356857577
console.log(add2(multiply2(number1, number2), number3)); // 356857577
console.log(add3(multiply3(number1, number2), number3)); // 356857577