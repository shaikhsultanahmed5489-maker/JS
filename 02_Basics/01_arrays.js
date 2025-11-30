const arr = [0,1,2,3,4]
const myheros = ["superman", "Batman"]

const arr2 = new Array(1, 2, 3, 4)
// console.log(arr[0]);


// Array Methods 

// arr.push(5)  // Adds elements to the end of the array.
// arr.pop()    //Removes the last element from the array and returns it.

//arr.unshift(3)  //unshift() adds a new element at the beginning of the array, shifting all elements to the right.
// arr.shift()      // removes the first element of the array and returns remaing it.

// console.log(arr.includes(7));    //Checks whether the array contains the value 7.
// console.log(arr.indexOf(3));     //Returns the index (position) of the value 3 in the array.


// const newarr = arr.join()   // Converts the array into string  

// console.log(newarr);
// console.log(typeof newarr);

// console.log(arr);


// Slice , Splice

console.log("A", arr);

const myn1 = arr.slice(1,3)     //arr.slice(1, 3) creates a new array by copying elements from index 1 up to (but NOT including) index 3.
                                // slice() does NOT change the original array, It returns a new array

console.log(myn1);
console.log("B", arr);

const myn2 = arr.splice(1,3)    //arr.splice(1, 3) removes elements from the original array and returns the removed elements.
                                // it changes the array
console.log("C", arr);
console.log(myn2);


