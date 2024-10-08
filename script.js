function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

function operate(number1, operator, number2) {
  if (operator == "+") {
    return add(number1, number2);
  }
  if (operator == "-") {
    return subtract(number1, number2);
  }
  if (operator == "*") {
    return multiply(number1, number2);
  }
  if (operator == "/") {
    return divide(number1, number2);
  }
}

let number1 = 1;
let number2 = 1;
let operator = "+";

let test = operate(number1, operator, number2);
console.log(test);
