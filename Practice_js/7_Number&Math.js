//1.	Round 4.75 using Math.round, Math.ceil, and Math.floor.

a = 4.75

console.log(Math.round(a));
console.log(Math.ceil(a));
console.log(Math.floor(a));
console.log("\n");

//------------------------------

//2.	Generate a random number from 1-100.

let genNo = Math.floor(Math.random() * 100) + 1;
console.log(genNo);
console.log("\n");

//------------------------------

//3. Convert 45.98765 to 2 decimals.

let num = 45.98765
console.log(num.toFixed(2));
console.log("\n");

//------------------------------

//4. Check if a value is NaN.

let value = "abc"
console.log(Number.isNaN(value));
console.log("\n");

//------------------------------

//5. Get absolute value of -99.

console.log(Math.abs(-99));
console.log("\n");

//------------------------------

//6. Generate a random integer between a given min and max value.

let min = 5
let max = 15
let randomNum = Math.floor(Math.random() * (max - min + 1) )+ min;
console.log(randomNum);
