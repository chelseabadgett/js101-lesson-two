const rl = require(`readline-sync`);
const MESSAGES = require(`./calculator_messages.json`);


function prompt(message) {
  console.log(message);
  let answer = rl.prompt();

  while (!answer){
    console.log(MESSAGES[`validation`]);
    console.log(message);
    answer = rl.prompt()
  }
  return answer;
}

function invalidNumber(number) {
  return number.trimStart() === `` || Number.isNaN(Number(number));
}

let name = prompt(MESSAGES[`welcome`]);
console.log(`Thanks ${name}!!`)

function operation(firstNum, secondNum, operator) {
  switch (operator) {
    case `+` : return parseInt(firstNum + secondNum);
    case `-` : return parseInt(firstNum - secondNum);
    case `*` : return parseInt(firstNum * secondNum);
    case `/` : return parseInt(firstNum / secondNum);
    case `**`: return parseInt(firstNum ** secondNum);
    default: return console.log(MESSAGES[`notValidNum`]);
  }
}

function inputSelections() {
  let firstNum = prompt(MESSAGES[`firstNum`])

  while (invalidNumber(firstNum)) {
    firstNum = prompt(MESSAGES[`notValidNum`]);
  }

  // Ask the user for the second number.
  let secondNum = prompt(MESSAGES[`secondNum`])
  
  while (invalidNumber(secondNum)) {
    secondNum = prompt(MESSAGES[`notValidNum`]);
  }
  console.log(`${firstNum} ${secondNum}`);
  
  // Ask the user for an operation to perform.
  let operator = prompt(MESSAGES[`operator`]);
  
  while (![`+`, `-`, '*', `/`, `**`].includes(operator)) {
    operator = prompt(MESSAGES[`validateOperator`]);
  }
  let answer = operation(firstNum, secondNum, operator);
  // Print the result to the terminal.
  console.log(`The answer is: ${answer}`);
  let calcSelection = prompt(MESSAGES[`playAgain`]);

  while (calcSelection === `y`) {
    inputSelections();
  }

}


inputSelections();



