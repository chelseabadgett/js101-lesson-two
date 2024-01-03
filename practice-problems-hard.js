function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

// semicolons in JavaScript, are tchincally optional. HOwever, when you omit them, the JavaScript engine 
// inserts them where it thinks you need them. In second, JavaScript inserts a semicolon after the word 
// return, so the function returns undefined. No erros are thrown since the rest of the code is valid, even
//  though it never gets executed. 

// Question 2
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Question 3
console.log(`A.: --------------`)

 function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * my guess: one is: one
 * two is: two
 * three is: three
 */

 console.log(`B.: --------------`)

 function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * my guess: one is: one
 * two is: two
 * three is: three
 */

 console.log(`C.: --------------`)

 function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

//let one = ["one"];
//let two = ["two"];
//let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/**
 * my guess: one is: two
 * two is: three
 * three is: one
 */

// Question 4

/**
 * Variables:
 *  * boo
 *  * scare
 *  * myBoo
 *  * halloweenCollection
 *  * myBoo
 * 
 * Primitive Values:
 *  * scare
 *  * scare.toUpperCase()
 *  * myBoo
 *  * "!!!"
 *  * greet
 *  * ----- ADDED LATER: * "Happy Halloween"
 *  * ----- ADDED LATER: * "Boo"
 *  * ----- ADDED LATER: * "May all your pumpkins be glowing"
 *  * scare
 *  * wish
 *  * myBoo
 *  * halloweenCollection["greet"]
 * 
 * Objects
 *  * boo
 *  * halloweenCollection
 */

// Question 9

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0 && dotSeparatedWords.length) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word) || dotSeparatedWords.length > 4) {
      return false 
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('12.333.23.45'))