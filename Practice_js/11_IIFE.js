//1.	Write an immediately invoked function that logs "Started".

(function () {
    console.log("Started");
    
})();
console.log("\n");

//2.	Write an IIFE that returns a random number.

const number = (function (){
    return (Math.floor(Math.random()* 100)+ 1);
    
})()
console.log(number);
console.log("\n");

//3.	Pass arguments into an IIFE and compute a result.

const pass = (function (num1,num2){
    let result = num1 + num2;
    return result;
})(10,15);

console.log(pass);
console.log("\n");

//4.	Return an object from an IIFE and store it in a variable.

const objs = (function (obj1) {
    return obj1 = { name : "Sultan", age: 20}
}
)();

console.log(objs)
console.log("\n");


//5.	Create an IIFE that initializes a configuration object and exposes only one public method.
(() => {
    const name = "Raju"
    const age = 20

    function greetings() {
        console.log(`My Name is ${name}`);
        
    }
    greetings();
})();
console.log("\n");

//6.	Create two separate IIFEs using the same variable names and ensure no conflict occurs.

(() => {
    const value = "First IIFe";
    console.log(value);
})();

(() => {
    const value = "Second IIFe";
    console.log(value);
})();
console.log("\n");

//7.	Return a function from an IIFE and invoke it later.

const greeter = (() => {
    const message = "Hello";

    return function(name){
        console.log(`${message},${name}`);
        
    };
})();

greeter(" Sultan")

