
//1. Create two variables with primitive values, assign one to the other, change the first — does second change?
// let a = 10
// let b = a

// a = 20
// console.log(a);
// console.log(b); 
//No, the second variable does not change because primitive values are copied by value.


//2. Create two objects, assign one to another, change a property — what happens?
// let myobj = {
//     Name: "Sultan Ahmed",
//     Age: 20
// }
// let myobj2 = myobj

// myobj.Age = 22

// console.log(myobj.Age);
// console.log(myobj2.Age);
//When one object is assigned to another, both share the same reference.(same Memory)
//Changing a property in one affects the other.


//3. Create an array and pass it to a function — modify inside function. Does original change?
// let myarr = [1, 2, 3]

// function modifyarray(a) {
//     a.push(4)
// }
// modifyarray(myarr)

// console.log(myarr);
//Yes, the original array changes when modified inside a function because arrays are passed by reference.


// 4.	What is the difference between mutating an object and reassigning an object reference?

//Muttaing
let user = {Name: "Sultan Ahmed", Age: 20}

user.Age = 25

// console.log(user);

//Reassigning
let user1 = {Name:"Hamza",Age: 18}

user1 = {Name: "Hamzah",Age : 25}

// console.log(user1);

//------------------

//5. If two variables reference the same object and one variable is reassigned, what happens to the other reference?
let obj = {
    Name : "SultanAhmed",
    Age: 20
}

let obj2 = obj

obj2 = {
    Name: "Hamzah",
    Age: 20
}

console.log(obj);
console.log(obj2);
console.log("\n");

//--------------------------------

//6.	  When an object or array is passed to a function, how does mutation vs reassignment affect the original value?

//Mutation
let arr = [1,2,3,4]

function mutatedarray(a) {
    a.push(5)
}
mutatedarray(arr)
console.log(arr);

//Reassignment

let arr1 = [1,2,3,4]

function reassignedarr(a) {
    a = [7,8,9]
}
reassignedarr(arr1)
console.log(arr1);
//When passed to a function, mutating an object or array changes the original value, but reassigning it does not.