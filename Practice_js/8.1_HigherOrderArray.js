//MAPS(1):

//1.	Multiply each number in array by 2.

let arr1 = [1,2,3,4,5]

const multi = arr1.map(num => num * 2)
console.log(multi);
console.log("\n");

//1.2.	Convert array of strings to uppercase.

let arr2 = ["Java","script"]

const upper = arr2.map(str => str.toUpperCase())
console.log(upper);
console.log("\n");


// 1.3. Extract specific properties from objects.

let obj1 = [{Name:"Sultan Ahmed",Age: 20}]

const caller = obj1.map(({Name}) => ({
    Name
}))

console.log(caller);
console.log("\n");

//1.4	Given an array of numbers, return a new array of their binary representations.

const numbers = [1,2,5,10]

const binarynumbers = numbers.map(num => num.toString(2))
console.log(binarynumbers);
console.log("\n");

//FILTER

//3.	Filter numbers greater than 50.

let arr3=[10,28,55,32,87]

const filtered = arr3.filter (num => num > 50)

console.log(filtered)
console.log("\n");
