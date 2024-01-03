//Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace(`important`, `urgent`))

console.log(`<----------------->`)

//Question 2
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let reversedNums = numbers.slice().reverse()
console.log(reversedNums)
console.log(numbers)

numbers = [1, 2, 3, 4, 5];
reversedNumbers = [...numbers].sort((num1, num2) => num2 - num1)
console.log(reversedNums)
console.log(numbers)

numbers = [1, 2, 3, 4, 5];
let reversedArray = [];
numbers.forEach(number => {
  reversedArray.unshift(number)
})

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

console.log(`<----------------->`)
//Question 3

numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1))
console.log(numbers.includes(number2))
console.log(`<----------------->`)

//Question 4

let famousWords = "seven years ago...";
famousWords = "Four score and "+famousWords
console.log(famousWords)

famousWords = "seven years ago...";
console.log("Four score and ".concat(famousWords))

//Question 5
let numbersList = [1, 2, 3, 4, 5];
numbersList.splice(2,1)
console.log(numbersList)

console.log(`<----------------->`)

//Question 6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
console.log(flintstones.flat())

flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log([].concat(...flintstones))

console.log(`<----------------->`)

//Question 7
let flintstones2 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(flintstones2).filter(pair => pair[0]==='Barney').shift())

console.log(`<----------------->`)

//Question 8
let numbers3 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers3))
console.log(Array.isArray(table))

console.log(`<----------------->`)

//Question 9
let title = "Flintstone Family Members";
let leftOver = 40 - title.length;
console.log(leftOver)
let amtNeeded = Math.floor(leftOver/2) + title.length
console.log(amtNeeded)
let newTitle = title.padStart(amtNeeded, ` `)
console.log(newTitle)

console.log(`<----------------->`)
//Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let regex = /[t]/g;
console.log(statement1.match(/[t]/g).length)

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;



