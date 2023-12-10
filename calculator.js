console.log("Welcome to Calculator!")
const rl = require(`readline-sync`);

// Ask the user for the first number.
let firstNum = parseInt(rl.question(`Please type in your first number:\n`));


// Ask the user for the second number.
let secondNum = parseInt(rl.question(`Please type in your second number:\n`));
console.log(`${firstNum} ${secondNum}`)

// Ask the user for an operation to perform.
let operator = rl.question(`What operator do you want to use on these numbers:\n`);

// Perform the operation on the two numbers.

function operation(operator){
  switch (operator) {
    case `+`: return firstNum+secondNum 
    case `-`: return firstNum-secondNum
    case `*`: return firstNum*secondNum
    case `/`: return firstNum/secondNum
    case `**`: return firstNum**secondNum

}}

let answer = operation(operator);
// Print the result to the terminal.
console.log(`The answer is: ${answer}`);