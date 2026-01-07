//1.	Write a function that returns sum of two numbers.

function sum(a,b) {
    return a+b
}
console.log(sum(5,10));

//  Arrow

const sum2 = (a, b) => a + b;
console.log(sum2(5,10));
console.log("\n")

//2.	Write a function with default parameters.

function greet(name = "Guest") {
    console.log(`Welcome ${name}`);
}
greet()
console.log("\n")

//3.	Write a function that accepts an object and prints keys.

let student = {
    name: "Sultan Ahmed",
    age: 20,
    email: "shaikhsultanahmed5489@gmail.com"
}

function printKeys(obj) {
    for (const key in obj) {
         console.log(key);
         
    }
    
}
printKeys(student)
console.log("\n")


//--------------------

//4.	Write a function that returns "even" or "odd" based on a number.

// function oddeven(num) {
//     if (num % 2 == 0) {
//         console.log(`${num} is Even No`);
        
//     } else {
//         console.log(`${num} is Odd No`);
        
//     }
    
// }
// oddeven(4)

function evenOrOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
}

console.log(evenOrOdd(10)); // even
console.log(evenOrOdd(7));  // odd
console.log("\n")

//5.	Write a function expression.

const add = function (num1,num2){
    return num1 + num2
}
console.log(add(5,10));
console.log("\n")

//6.	Write an arrow function version of previous function.

const addition = (num1,num2) => {
        return num1 + num2
}
console.log(addition(5,5));
console.log("\n")

// 7.	Create an object with a method using this.

const student7 = {
    name: "Shaikh Sultan Ahmed",
    age: 20,
    course: "BSc (IT)",

    displayInfo: function() {
        console.log( `Hello my name is ${this.name}, Aged ${this.age} and my course is ${this.course}`)

    }

}

student7.displayInfo()
console.log("\n")

//8.	Convert same method to arrow function — observe behavior.

const intro = (name,age,course) => {
        console.log( `Hello my name is ${student7.name}, Aged ${student7.age} and my course is ${student7.course}`)

}
intro()
console.log("\n")

//9.	Use this inside a constructor function.
function func1(name,age,course) {
    this.name = name,
    this.age = age,
    this.course = course,

    this.introduce = function() {
        console.log( `Hello my name is ${student7.name}, Aged ${student7.age} and my course is ${student7.course}`)

    }

} 
const f1 = new func1("Shaikh",16,"BCA")
const f2 = new func1("Hamza",45,"Bcom")
f1.introduce()
f2.introduce()

console.log("\n");

// const outfunc1 = new func1("Sultan",20,"BSc")
// console.log(outfunc1);
console.log("\n");

//10. Write a pure function and an impure function.

// function add2(a,b) {
//     return a + b;
// }
// console.log(add2(5,10))

// let total = 0;

// function sum(value) {
//     total += value;
//    return total;
// }

// console.log(sum(10)); //Can be mutable by an outside variable.
// console.log(sum(5)); //Can be mutable by an outside variable.

// console.log("\n")

//11. Observe this inside a callback function.

const user = {
  name: "Sultan",
  greet: (function () {
   
      console.log(this.name);
    })
};

user.greet();
console.log("\n")

//12.	Pass a function as an argument and call it

function greet() {
    console.log("Hello world");   
}
function callFunction(fn) {
    fn()
}

callFunction(greet)
console.log("\n")

//13.	Use map() with an arrow function

const numbers = [2,3,4,5]

const doubled = numbers.map(num => num * 2)
console.log(doubled);

//14.	Write one function that does one thing only

function greet() {
    console.log("hello")
}

greet()

console.log("\n")

//15.	Write a function that returns another function 

function outer() {
    return function inner() {
        console.log("Hello from inner function");
        
    }
}
const ff = outer()
ff()
console.log("\n")

//16.	Write a function that accepts a callback and passes a value to it

function process(value,Callback){
    Callback(value)
}
function display(result){
    console.log(result);
}
process(10,display)
console.log("\n");


//17.	Write a function that validates input type before processing.
function square(num){
    if (typeof(num) !== "number"){
        console.log("Invalid Input: number required");
    }
    else{
        return num * num
    }
}
// square(5);
console.log(square(5));
console.log(square("5"));

