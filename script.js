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
  let sum = number1 / number2;
  if (sum % 1 !== 0) {
    return sum.toFixed(2);
  }
  return sum;
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

let displayValue = "420+69";

// TODO: Remove this stuff
// let number1 = 2;
// let number2 = 2;
// let operator = "+";
// // testing all operators
// let test = operate(number1, operator, number2);
// console.log(test);
// operator = "-";
// test = operate(number1, operator, number2);
// console.log(test);
// operator = "*";
// test = operate(number1, operator, number2);
// console.log(test);
// operator = "/";
// test = operate(number1, operator, number2);
// console.log(test);

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

function equals() {
  let stringToBeCalculated = displayValue;
  let operator = "";
  if (stringToBeCalculated.search("[\\+]") != -1) {
    operator = "+";
  }
  if (stringToBeCalculated.search("[\\-]") != -1) {
    operator = "-";
  }
  if (stringToBeCalculated.search("[\\/]") != -1) {
    operator = "/";
  }
  if (stringToBeCalculated.search("[\\*]") != -1) {
    operator = "*";
  }
  // TODO: add snarky error message for when displayValue contains /0 (MANDATORY)

  let operatorPos = stringToBeCalculated.indexOf(operator);
  let number1 = Number(stringToBeCalculated.slice(0, operatorPos));
  let number2 = Number(
    stringToBeCalculated.slice(operatorPos + 1, stringToBeCalculated.length),
  );

  displayValue = String(operate(number1, operator, number2));
  updateDisplay();
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
const plusButton = document.querySelector("#operator-plus");
plusButton.onclick = () => {
  if (
    displayValue.includes("+") ||
    displayValue.includes("-") ||
    displayValue.includes("/") ||
    displayValue.includes("*")
  ) {
    equals();
  }
  displayValue += "+";
  updateDisplay();
};
const minusButton = document.querySelector("#operator-minus");
minusButton.onclick = () => {
  if (
    displayValue.includes("+") ||
    displayValue.includes("-") ||
    displayValue.includes("/") ||
    displayValue.includes("*")
  ) {
    equals();
  }
  displayValue += "-";
  updateDisplay();
};
const multiplyButton = document.querySelector("#operator-multiply");
multiplyButton.onclick = () => {
  if (
    displayValue.includes("+") ||
    displayValue.includes("-") ||
    displayValue.includes("/") ||
    displayValue.includes("*")
  ) {
    equals();
  }
  displayValue += "*";
  updateDisplay();
};
const divideButton = document.querySelector("#operator-divide");
divideButton.onclick = () => {
  if (
    displayValue.includes("+") ||
    displayValue.includes("-") ||
    displayValue.includes("/") ||
    displayValue.includes("*")
  ) {
    equals();
  }
  displayValue += "/";
  updateDisplay();
};

// equals button
const equalButton = document.querySelector("#equals");
equalButton.onclick = () => {
  if (
    displayValue.includes("+") ||
    displayValue.includes("-") ||
    displayValue.includes("/") ||
    displayValue.includes("*")
  ) {
    equals();
  }
};

// clear button
const clearButton = document.querySelector("#clear");
clearButton.onclick = () => {
  displayValue = "";
  updateDisplay();
};

/*
const backspaceButton = document.querySelector("#backspace");
backspaceButton.onclick = () => {
  displayValue -= "";
  updateDisplay();
};
*/
