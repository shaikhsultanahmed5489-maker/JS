//1. Extract "Script" from "JavaScript".

let str = "Javascript"
console.log(str.slice(4));
console.log("\n");


//-------------

//2. Replace "world" with "developer" in "Hello world".
let str2 = "Hello World"
console.log(str2.replace("World","Developer"));
console.log("\n");

//-------------

//3. Convert text to uppercase and lowercase.

let str3 = "Hello World From Sultan"
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log("\n");

//-------------

//4. Check if "JavaScript" includes "Script".

let str4 = "Javascript"
console.log(str4.includes("script"));
console.log("\n");

//-------------

//5. Count characters in a string.

console.log(`String Characters Count: ${str.length}`);
console.log("\n");

//-------------

//6. Split "apple,banana,mango" into an array.

str6 = "apple,banana,mango"
console.log(str6.split(","));
console.log("\n");

//-------------

//7. Reverse a string manually without .reverse().

let str7 = "JavaScript";
let reversed = "";

for (let i = str7.length - 1; i >= 0; i--) {
    reversed += str7[i];
}
console.log(reversed); // tpircSavaJ
console.log("\n");

//-------------

//8. Remove extra spaces from the beginning and end of a string.

let str8 = "    Hello World     "
console.log(str8.trim());
console.log("\n");

//-------------

//9. Check if a string starts with or ends with a specific word.

let str9 = "Javascript is Awesome"

console.log(str9.startsWith("Java"));
console.log(str9.endsWith("some"));
console.log("\n");

//-------------

//10. Find the index of "Script" in "JavaScript".

console.log(`Check what index it include "Script": ${str.indexOf("script")}`)
console.log("\n")

//-------------

//11. Extract the last 4 characters from a string.

console.log(`Check last 4 characters of a string: ${str.slice(-4, str.length)}`)
console.log("\n")

//-------------

//12. Convert a string into an array of individual characters.

console.log(str.split(""));
console.log("\n")

//-------------

//13. Join an array of words back into a string.

let arr = ["Java","Script"]
console.log(arr.join(""));
console.log("\n")

//-------------

//14. Capitalize the first letter of each word in a sentence.

let sentence = "hello world from javascript";
let words = sentence.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalWord = word[0].toUpperCase() + word.slice(1);
    result = result + capitalWord + " ";
}

console.log(result.trim());
