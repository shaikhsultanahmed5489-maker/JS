let myarr = [1,2,3,4,5]
console.log(`This is my Array:${myarr}`);
console.log("\n");

//--------------------------------------

//2. Add values using push, remove using pop.

myarr.push(6)
console.log(myarr);

myarr.pop(4)
console.log(myarr);
console.log("\n");

//--------------------------------------

//3. Add values using unshift, remove using shift.

myarr.unshift(0)
console.log(`${myarr}`)

myarr.shift()
console.log(`${myarr}`)
console.log("\n")

//--------------------------------------------

//4. Find length.

console.log(`length of the current array is ${myarr.length}`)
console.log("\n")

//--------------------------------------------

//5. Check if an element exists using includes.

console.log(`Check if current array includes value 6: ${myarr.includes(6)}`)
console.log("\n")

//--------------------------------------------

//6. Convert an array to a string and back.

let myarr2 = ["Java","script"]
console.log(myarr2.join(""));
console.log("\n")

//--------------------------------------------

//7. Merge two arrays using concat.

console.log(myarr.concat(myarr2));
console.log("\n")

//--------------------------------------------

//8. Merge using spread operator.

let mergedArr = [...myarr, ...myarr2]
console.log(mergedArr);
console.log("\n")

//--------------------------------------------

//9. Flatten [1,[2,[3,[4]]]].

let arr = [1,[2,[3,[4]]]]

console.log(arr.flat(Infinity));
console.log("\n")

//--------------------------------------------

//10. Slice an array to get middle values.

let midindex = Math.floor(myarr.length / 2)
let middle = myarr.slice(midindex,midindex + 1)

console.log(middle);
console.log("\n")

//11. Splice an array to remove and insert.

myarr.splice(5,0,6);
console.log(myarr);
console.log("\n")

//12. Sort numbers ascending and descending.


//13. Reverse an array.

console.log(myarr.reverse());
