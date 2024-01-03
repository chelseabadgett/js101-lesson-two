/**
 * the loan amount
 * the annual percentage rate (APR)
 * the loan duration
 */


/*
---------------------------------------------------------------------------
*/

// monthly interest
// loan duration in months

/**
 * formula: 
 * let m = p * (j / (1 - Math.pow((1 + j), (-n))));
 * m = monthly payment
 * p = loan amount
 * j = monthly interest rate
 * n = loan duration in months
 */

const rl = require(`readline-sync`);
const es = require(``)
//const MESSAGES = require(`mortgage-car-loan-cal-messages.json`)

const prompt = (message) => {
  console.log(message)
  let answer = rl.question()
  return answer
}

function isNumberValue(input) {
  parseFloat(input)
  return typeof(parseFloat(input)) === `number`;
}

let loanAmount = parseFloat(prompt(`What is the full loan amount?`))

while(isNumberValue(loanAmount) === false) {
  prompt("This is not a number, try again.")
}
let apr = parseFloat(prompt(`What is the current APR. If your APR is 7 percent, please type the number 7.`))/100;

while(isNumberValue(apr) === false) {
  prompt(`This is not a number, try again`)
}

let loanDuration = parseFloat(prompt(`What is the loan duration in years?`));

while(isNumberValue(loanDuration) === false) {
  prompt(`This is not a number, try again`)
}

let monthlyIntRate = apr/12;
let loanMonthsDuration = loanDuration * 12;

let monthlyPayment = loanAmount * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-loanMonthsDuration))));

console.log(`$${monthlyPayment.toFixed(2)}`)


