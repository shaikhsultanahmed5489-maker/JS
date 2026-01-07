// 1.	Create a copy of an array using the spread operator.

let arr1 = [1,2,3,4]

let copy = [...arr1]
copy.push(5)
console.log(arr1);
console.log(copy);
console.log("\n");

//2.	Merge two arrays using the spread operator.

let arr2 = [5,6,7,8]

let merged = [...arr1,...arr2]
// console.log(merged.join(","))
// console.log(JSON.stringify(merged))
console.log(merged);
console.log("\n");

//3.	Convert a string into an array of characters using the spread operator.

let arr3 = "Javascript"

let conv = [...arr3]
console.log(conv);
console.log("\n");

//4.	Create a copy of an object using the spread operator.

let obj1 = {a: 10}

const copied = {...obj1}
console.log(copied);
console.log("\n");

//5.	Merge two objects using the spread operator.

let obj2 = {b: 20}

const copyObj = {...obj1,...obj2}
console.log(copyObj);
console.log("\n");

//6.	Update a property in an object immutably using the spread operator.

let mutable = {...obj1, a: 20}
console.log(mutable);
console.log("\n");

//7.	Pass array elements as arguments to a function using the spread operator.

function f1(a,b,c){
    console.log(`${a},${b},${c}`);   
}
let arr7 = [1,2,3]

f1(...arr7)
console.log("\n");

//8.	Use the spread operator with Math.max() or Math.min().

console.log(Math.max(...arr1));
console.log(Math.min(...arr1));
console.log("\n");

//9.	Insert elements at the beginning of an array using the spread operator.

let modify = [15,...arr1]
console.log(modify);

console.log("\n")

//--------------

//10.	Insert elements at the end of an array using the spread operator.

modify = [...arr1, 20]

console.log(modify)
console.log("\n")