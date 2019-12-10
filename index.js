// Drill 01.a
// -- O(1) Constant time.
// ------ Size of data doesn't matter and you are asking the room at one time. 
// -- O(n) Linear time.
// ----- Asking each person individually will increase with the size of data.


// Drill 02
// -- O(1) Constant time.
// ---- Single value performing a check. Doesn't matter with size increase.

// Drill 03
// -- O(n^2) Polynomial
// ---- This is nesting for loops to cover 2 data sets. Algorithm will increase with data set.

// Drill 04
// -- O(n) Linear
// ---- Directly related to the size of the data.

// Drill 05
// -- O(n) Linear
// ---- Directly related to the size of the data.



// Drill 06
// -- O(n^2) Polynomial
// ---- Increases greatly with the data increasing slightly. Not quite exponentially. 


// const arr = [1,2,3];
// const arr01 = [1,2,3,4,5,6,7,8,9,10];

// function createPairs(arr) {
//     let ticks=1;
//     for (let i = 0; i < arr.length; i++) {
//         ticks++;
//         for(let j = i + 1; j < arr.length; j++) {
//             ticks++;
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
//     return ticks;
// }

// console.log(createPairs(arr01));



// Drill 07
// -- O(n) Linear
// ---- Directly related to the size of the data. it is summing all of the numbers that come before the inputted number.

// Drill 08
// -- O(log(n)) Logarithmic time
// ---- Cuts the data in half and then searches that. This way if the data set increases drastically we search time only increases marginally.


// Drill 09
// -- O(infinity) Infinite time
// ---- This search may never find the correct position.

// Drill 10 
// -- O(n) Linear time
// ---- This algorithm is returning true for prime numbers. Because it has to iterate over the numbers BEFORE the input it is directly related to the size of the number



// Drill 12 
// -- 12.1 Counting Sheep
// ---- Solving Iteratively  
// ---- O(n) Linear Complexity

// const countingSheep = function (num){
//     for(let i = 0; i <= num; i++){
//         if(i === num){
//             console.log('all sheep jumped over the fence');
//         } else {
//             console.log(`${num - i}: Another sheep jumped over the fence.`);
//         }
//     }
// };
// console.log(countingSheep(5));



// Power Calculator
// 2. Write a function called `powerCalculator()` that takes two parameters, an integer as a base, and another integer as an exponent.The function returns the value of the base raised to the power of the exponent.Use only exponents greater than or equal to 0(positive numbers)
//Linear ~ O(n)

// const powerCalculator = (base, number) => {
//   let result = 1;
//   if (number < 0) return;
//   for (let i = 0; i < number; i++){
//     result *= base;
//   }
//   return result;
// };

// console.log(powerCalculator(5, 12));

// Drill 12.3 Reverse String
// -- O(n) Linear time complexity as it's iterating over every number before the input. 
// const reverseString = (str) => {
//     let currentString = str;
//     let newString = '';
//     for ( let i = 0; i < str.length; i++){
//         newString += currentString[currentString.length-1];
//         currentString = currentString.slice(0,-1);
//     }
//     return newString;
// };
// console.log(reverseString('hi string'));

// Exercise 4 - Triangular Number
// Calculates the nth triangular number.
// A triangular number counts the objects that can form an equilateral triangle.
// The nth triangular number is the number of dots composing a triangle with n dots on a side,
//   and is equal to the sum of the n natural numbers from 1 to n.
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
// Constant O(c) 
const triangleNumber = (num) => {
  return num * (num + 1) / 2;
};

console.log(triangleNumber(2));

