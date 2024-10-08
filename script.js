function operate(number1, operator, number2) {
  if (operator == "+") {
    return number1 + number2;
  }
  if (operator == "-") {
    return number1 - number2;
  }
  if (operator == "*") {
    return number1 * number2;
  }
  if (operator == "/") {
    return number1 / number2;
  }
}

let test = operate(1, "+", 3);
console.log(test);
