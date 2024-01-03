//Question 1
let numbers = [1, 2, 3, 4];
console.log(numbers)

numbers = [];
console.log(numbers)

numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers)

// numbers = [1, 2, 3, 4];
// let count = numbers.length
// for (let index = 0; index < count; index++) {
//   numbers.shift()
// }
// console.log(numbers)

numbers = [1, 2, 3, 4];
numbers.splice(0,numbers.length)
console.log(numbers)

numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.pop()
}
console.log(numbers)
console.log(`<----------------->`)

//Question 2
console.log([1, 2, 3] + [4, 5]);
console.log(`<----------------->`)

//Question 3
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
console.log(`<----------------->`)

//Question 4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/**
 * NOTE:
 * Shallow Copy: 
 * A shallow copy only makes a duplicate of the 
 * outermost values in an array or object. If we
 *  perform a shallow copy on arr1, we end up with
 *  two different arrays, but we still only have 
 * one occurrence each of { first: 42 } and 
 * { second: 'value2' }. In this case, both arr1[0]
 *  and arr2[0] point to the same object in memory. 
 * Likewise, arr1[1] and arr2[1] point to the 
 * { second: 'value2' } object.
 * 
 * 
 *    arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> | { first: "value1" } | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+

arr1[0] and arr2[0] point to the same object, { first: "value1" }. Thus, when we replace the value of the first property by using arr2[0].first, the change shows up in arr1 as well. In the end, we get the following results:

   arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> |    { first: 42 }    | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+
*/

console.log(`<----------------->`)
// Question 5
function isColorValid(color) {
  return color === "blue" || color === "green"
}

console.log(isColorValid(`green`))
console.log(isColorValid(`orange`))

const isColorValid2 = color => color === "blue" || color === "green";

const isColorValid3 = color => ["blue","green"].includes(color);

console.log(`<----------------->`)

//Question 6
let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);
/**
 * Variables:
 *    *arr
 *    *newArr
 *    *num
 *    *newNum
 *    *   double
 *    *   num <--- part of function
 *   
 * Primitive Values:
 *    *   1
 *    *   2
 *    *   3
 *    *   0 <--- is used to access the element, also a primitive
 *    *num
 *    *   num defined in the funciton
 *    *   2  
 *    *newNum
 *    *   double(newNum)
 * 
 * Objects:
 *    *arr
 *    *newArr
 *    *double()
 *    *   (there are 2 objects and 3 pointers since arr and newArr reference the same object) 
 * 
 */


