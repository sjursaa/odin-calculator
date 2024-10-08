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

let displayValue = 42069;
let number1 = 2;
let number2 = 2;
let operator = "+";

// testing all operators
let test = operate(number1, operator, number2);
console.log(test);
operator = "-";
test = operate(number1, operator, number2);
console.log(test);
operator = "*";
test = operate(number1, operator, number2);
console.log(test);
operator = "/";
test = operate(number1, operator, number2);
console.log(test);

// TODO: add eventhandlers for when buttons are pressed

// setting display-div to the value contained in the script
const display = document.querySelector(".display");
display.textContent = displayValue;

//
const button1 = document.querySelector("#number1");
button1.onclick = () => alert("Ello");
