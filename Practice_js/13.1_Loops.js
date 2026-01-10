//6.	Build a new array by looping through an existing array.

let arr1 = [1,2,3,4,5]
let arr = []

for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i])    
}
console.log(arr);
console.log("\n");

//7.	Count how many times a value appears in an array using a loop.

// let arr2 = [ 1,2,3,4,4,3,3]
// let count = 0;

// for (let i = 0; i < arr2.length; i++) {
//     if(arr2[i] == 4)
//     count++
// }

// console.log(count)

let arr3 = [1, 2, 3, 2, 4, 2, 5];
let valueToCount = 2;
let count = 0;

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === valueToCount) {
        count++;
    }
}

console.log(count);
console.log("\n")

//8.	Loop through an object and print both keys and values.

let obj1 = { Name: "Aayan", Age: 10}

for (const key in obj1) {
   
    console.log(key,obj1[key]);
       
}
console.log("\n")

//10.	Break out of a loop when a condition is met.

for (let i = 1; i <= 10; i++) {
    // if(i % 3 == 0){break}
    // console.log(i);

    
    if( i === 5){ break}
    console.log(i);
}
console.log("\n");

//11.	Use continue to skip specific values in a loop

for (let i = 1; i <= 10 ; i++) {

    if(i === 7){continue}
    console.log(i);

}
console.log("\n")

//12.	Write a loop that runs at least once.

let i = 5;

do {
    console.log("This will run at least once");
    i++;
} while (i <= 3);

console.log("\n");

//13.	Prevent an infinite loop by correcting the condition.

//13.	Prevent an infinite loop by correcting the condition.

let array = [10, 20, 30, 40];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}


let f = 1;
while (f <= 5) {
    console.log(f);
    f++;   // ✅ update condition variable
}
console.log("\n")

//14.	Compare for, for...of, and for...in on an array.

let arr4 = [10, 20, 30];

for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

for (let value of arr4) {
    console.log(value);
}

for (let index in arr4) {
    console.log(arr4[index]);
}
console.log("\n");

//Use for when you need index control, for...of for clean array iteration, and avoid for...in for arrays because it’s meant for objects.


// 15.	Demonstrate why for...in should not be used for arrays.

// for...in should not be used for arrays because it iterates over enumerable properties (including inherited ones), returns indexes 
// as strings, and may cause unexpected behavior. Use for or for...of instead.


//16.	Build a new string by transforming characters in a loop.

let str = "Sultan";
let newStr = "";

for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase()
}

console.log(newStr);
console.log("\n");

//17.	Count the number of characters in a string using a loop.

str = "JavaScript";
count = 0;

for (let i = 0; i < str.length; i++) {
  count++;
}

console.log(count); 

console.log("\n")

//18.	Loop through an array in reverse order.

i = arr.length - 1;

while (i >= 0) {
    console.log(arr[i]);
    i--;
}

//19.	Exit a loop early using return inside a function
function findNumber(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {
            return "Found at index " + i; // exits loop AND function
        }
    }

    return "Not found";
}

console.log(findNumber([10, 20, 30, 40], 30));
