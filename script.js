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

// TODO: refactor to take a string, split on operator, compute and return as string
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

let displayValue = "42069";
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

// setting display-div to the value contained in the script
function updateDisplay() {
  const display = document.querySelector(".display");
  // TODO: Do something smarter to prevent div from disappearing
  if (displayValue == "") {
    display.textContent = "Press some numbers dawg";
  } else {
    display.textContent = displayValue;
  }
}
updateDisplay();

// Eventhandlers for number buttons
const button1 = document.querySelector("#number1");
button1.onclick = () => {
  displayValue += 1;
  updateDisplay();
};
const button2 = document.querySelector("#number2");
button2.onclick = () => {
  displayValue += 2;
  updateDisplay();
};
const button3 = document.querySelector("#number3");
button3.onclick = () => {
  displayValue += 3;
  updateDisplay();
};
const button4 = document.querySelector("#number4");
button4.onclick = () => {
  displayValue += 4;
  updateDisplay();
};
const button5 = document.querySelector("#number5");
button5.onclick = () => {
  displayValue += 5;
  updateDisplay();
};
const button6 = document.querySelector("#number6");
button6.onclick = () => {
  displayValue += 6;
  updateDisplay();
};
const button7 = document.querySelector("#number7");
button7.onclick = () => {
  displayValue += 7;
  updateDisplay();
};
const button8 = document.querySelector("#number8");
button8.onclick = () => {
  displayValue += 8;
  updateDisplay();
};
const button9 = document.querySelector("#number9");
button9.onclick = () => {
  displayValue += 9;
  updateDisplay();
};
const button0 = document.querySelector("#number0");
button0.onclick = () => {
  displayValue += 0;
  updateDisplay();
};

// Operator buttons
const plusButton = document.querySelector("#operatorPlus");
plusButton.onclick = () => {
  displayValue += "+";
  updateDisplay();
};
const minusButton = document.querySelector("#operatorMinus");
minusButton.onclick = () => {
  displayValue += "-";
  updateDisplay();
};
const multiplyButton = document.querySelector("#operatorMultiply");
multiplyButton.onclick = () => {
  displayValue += "*";
  updateDisplay();
};
const divideButton = document.querySelector("#operatorDivide");
divideButton.onclick = () => {
  displayValue += "/";
  updateDisplay();
};

// equals button
const equalButton = document.querySelector("#equals");
equalButton.onclick = () => {
  let stringToBeCalculated = displayValue;
  displayValue = operate(stringToBeCalculated);
  updateDisplay();
};

// clear button
const clearButton = document.querySelector("#clear");
clearButton.onclick = () => {
  displayValue = "";
  updateDisplay();
};
