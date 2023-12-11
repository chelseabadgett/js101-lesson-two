console.log("Welcome to Calculator!");
const rl = require(`readline-sync`);

function invalidNumber(number) {
  return number.trimStart() === `` || Number.isNaN(Number(number));
}

// Ask the user for the first number.
let firstNum = rl.question(`Please type in your first number:\n`);

while (invalidNumber(firstNum)) {
  firstNum = rl.question(`Hmm, that doesn't look like a valid number.`);
}

// Ask the user for the second number.
let secondNum = rl.question(`Please type in your second number:\n`);

while (invalidNumber(secondNum)) {
  secondNum = rl.question(`Hmm, that doesn't look like a valid number.`);
}
console.log(`${firstNum} ${secondNum}`);

// Ask the user for an operation to perform.
let operator = rl.question(`What operator do you want to use on these numbers:\n`);

while (![`+`, `-`, '*', `/`, `**`].includes(operator)) {
  operator = rl.question(`Must choose: +, -, *, /, or **`);
}

// Perform the operation on the two numbers.

function operation(operator) {
  switch (operator) {
    case `+` : return firstNum + secondNum;
    case `-` : return firstNum - secondNum;
    case `*` : return firstNum * secondNum;
    case `/` : return firstNum / secondNum;
    case `**`: return firstNum ** secondNum;
    default: return console.log(`Must be an operation.`);
  }
}

let answer = operation(operator);
// Print the result to the terminal.
console.log(`The answer is: ${answer}`);