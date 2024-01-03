//Question 2

let str1 = "Come over here!"
let str2 = "What's up, Doc?"

function lastCharIsExclamation (sentence) {
  let lastChar = sentence.charAt(sentence.length - 1)
  return lastChar === "!"
}

console.log(lastCharIsExclamation(str1))
console.log(lastCharIsExclamation(str2))

str1.endsWith("!")
str2.endsWith("!")

//Question 3
let ages1 = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages1.hasOwnProperty('Spot'))
console.log(ages1.hasOwnProperty('Herman'))

//Question 4
console.log(`<----------------->`)
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
console.log(munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase());

//Question 5
console.log(`<----------------->`)
console.log(false == '0');
console.log(false === '0');

//Question 6
console.log(`<----------------->`)
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 }
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges)
console.log(ages)

//Question 7
console.log(`<----------------->`)
let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.includes(`Dino`))
console.log(str4.includes(`Dino`))

//Question 8
console.log(`<----------------->`)
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino")
console.log(flintstones)

//Question 9
console.log(`<----------------->`)
let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones2.push(`Dino`, `Hoppy`)
console.log(flintstones2)

//Questino 10
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

function stopAtHouse(sentence){
  const sentenceArray = sentence.split(` `)
  let houseLocation = sentenceArray.indexOf(`house`)
  let firstHalf = sentenceArray.slice(0,houseLocation)
  return console.log(firstHalf.join(` `))
}
stopAtHouse(advice)