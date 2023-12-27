//set display variables
let firstNumber = 0;
let secondNumber = 0;
let operator = "+";

//arithmetic functions
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 3));

function subtract(a, b) {
  return a - b;
}
console.log(subtract(5, 4));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 10));

function divide(a, b) {
  return a / b;
}
console.log(divide(60, 15));

//operate function
function operate(num1, operator, num2) {
  if (operator === "+") {
   return sum(num1, num2);
  } else if (operator === "-") {
   return subtract(num1, num2);
  } else if (operator === "*") {
   return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

const subtraction = operate(100,"-",50);
console.log(subtraction);