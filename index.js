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
// -- O(infinity) constant time
// ---- Doesn't have to search the size just pick a spot at random. 

// Drill 10 
// -- O(n) Linear time
// ---- This algorithm is returning true for prime numbers. Because it has to iterate over the numbers BEFORE the input it is directly related to the size of the number



// Drill 12 
// -- 12.1 Counting Sheep
// ---- Solving Iteratively  
// ---- O(n) Linear Complexity

// Solving Recursively complexity is O(n);

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
// Solving Recursively complexity is O(n);

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
// Solving Recursively complexity is O(n);
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
// Constant O(1) 
// Solving Recursively complexity is O(n);
// const triangleNumber = (num) => {
//   return num * (num + 1) / 2;
// };

//console.log(triangleNumber(2));


// Tower of Hanoi

// function TOH(num, source = [], dest = [], temp = [], prevMove = null){
//     const poleSource = source;
//     const poleDest = dest;
//     const poleTemp = temp;

//     if(num === 1){
//         print(source, dest);
//     }

//     // not previously moved disk
//     // try moving largest disk
//     // try moving second largest etc...
//     // if poleDest[0] === disksize
 
//         if (getLargest(poleSource) < getSmallest(poleDest)) {
//             poleDest.push(poleSource.pop());
//             print(poleSource, poleDest);
//             return TOH(num, poleSource, poleDest, poleTemp);
//         } else if (getSmallest(poleSource)){
// return;
//         }
        
// return;
//     }
    

// function print(source, dest){
//     console.log(`Solving: ${source} -> ${dest}`);
// }
// function getSmallest(arr){
//     return Math.min.apply(Math, arr); 
// }

// function getLargest(arr) {
//     return Math.max.apply(Math, arr);
// }
// TOH(6, [6,5,4,3,2,1], [], []);

//const array = [1,3];
//console.log(getLargest(array));


// function TOH02(num, source, dest, temp){
//     if(num === 0) {
//         return;
//     }
//     if(num === 1){
//         print02(source, dest);
//         return;
//     }
    
//     TOH02( num -1, source, temp, dest);
//     print02(source, dest);

//     TOH02( num -1, temp, dest, source);
// }

// function print02(source, dest){
//     console.log(`solving ${source} to ${dest}`);

// }


//TOH02(3, 'src','dst', 'tmp');





// Drill 12.string splitter
//let input= '1/21/2018';
//Output: 1212018 OR["1", "21", "2018"]
// Linear O(n)
// Solving Recursively complexity is O(n);

// const stringSplitter = (str, sep) => {
//     let newString = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === sep) {
//             continue;
//         }
//         newString += str[i];
//     }
//     return newString;
// };

//console.log(stringSplitter(input, '/'));


// Drill 12.factorial
// Linear O(n) complexity.
// Solving Recursively complexity is O(n);

// function factorial(num) {
//     let result = num;
//     for(let i = num - 1; i > 0; i--){
//         result *= i ;
//     }
//     return result;
// }
// console.log(factorial(5));

// O(n)
// Solving Recursively complexity is O(n^2)
// function fibonacci(n) {
//     let result = [];
//     for (let i = 0; i < n; i++){
//         if (i < 2) {
//             result.push(1);
//         } else {
//             result.push(result[i-1] + result[i-2]);
//         }
//     }
//     return result;
// }
// console.log(fibonacci(7));


// Anagrams recursive complexity
// Recursive complexity is O(x^n)


// Org Chart 
// // Solving Recursively complexity is O(n);


// Binary 
// Solving Recursively complexity is O(log(n);

