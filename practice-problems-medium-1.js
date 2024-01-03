//Question 1

function flinstonesArt() {
  for (let index = 0; index < 10; index++) {
    console.log(` `.repeat(index)+ "The Flintstones Rock!")
  }
}

flinstonesArt()

//Question 2
let munstersDescription = "The Munsters are creepy and spooky.";
function oppositeCase (sentence) {
  let newSentenceArr = [];
  let sentArr = sentence.split(``)
  sentArr.forEach(letter => {
    if(letter === letter.toLowerCase()) {
      newSentenceArr.push(letter.toUpperCase())
    } else {
      newSentenceArr.push(letter.toLowerCase())
    }
  });
  return newSentenceArr.join(``)
}
console.log(oppositeCase(munstersDescription))

//Question 3
function factors(number) {
  if(number <= 0){
    return 'Only get divisor for non-negative, non-zero numbers';
  } else {
    let divisor = number;
    let factors = [];
    for (let index = number; index >= 0; ) {
      if(number % divisor === 0) {
        factors.push(number/divisor)
      }
      divisor -=1;
    }
    return factors;
  }
}

//console.log(factors(32))

//Question 4

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
/**
 * concat: the concat() method of Array is used to merge two or more
 * arrays. This method does not change the existing arrays, but instead
 * returns a new array
 * 
 * push(): the push() method of Array instances addds the specified 
 * elements to the end of an array and returns teh new length of the
 *  array
 * 
 * shift(): the shift() method of Array instances removes tthe first
 * element from an array and returns the removed element. This method 
 * changes the length of the array
 */

// Question 6
let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//Question 7

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
console.log("paper");

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());
bar("yes"); -> "no"