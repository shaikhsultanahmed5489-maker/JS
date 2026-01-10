//1. Convert "45" to number.
// let num = "45"

// console.log(Number(num));
// console.log(typeof Number(num)); 

//---------------------

//2. Convert false to number.
// let bool = false
// console.log(Number(bool));
// console.log(typeof Number(bool));


//3. Convert number 55 to string.

// let num = 55
// console.log(String(num));
// console.log(typeof String(num));


//4. Convert "33abc" to number and observe.
// let demo = "33abc"
// console.log(Number(demo));
// console.log(typeof Number(demo));   //Output: NaN 


//5. Convert "", " ", "0" to boolean.
// let demo = ""
// let demo1 = " "
// let demo2 = "0"
// console.log(Boolean(demo));
// console.log(Boolean(demo1));
// console.log(Boolean(demo2));
// console.log(typeof Boolean(demo,demo1,demo2));


//6. Try 5 + "5", "5" - 2, true + 1, "hello" * 2.
// console.log(5 + "5");
// console.log("5" - 2);
// console.log(true + 1);
// console.log("hello" * 2);


//+ 7. Convert user input "20px" into a usable number.
// let num = parseInt("20px")
// console.log(num);
// console.log(typeof num);


//----------------------------------

//4.) Comparison & Equality

//1. Compare using both: == and === "5" and 5 true and 1 null and undefined

// console.log("5" == 5);
// console.log("5" === 5);

// console.log(true == 1);
// console.log(true === 1);

// console.log(null == undefined);
// console.log(null === undefined);


//2. Compare "Apple" and "Banana".
// console.log("Apple" == "Banana");  // false
// console.log("Apple" === "Banana");  // false
// console.log("Apple" > "Banana");  // false
// console.log("Apple" < "Banana");  // True


//3. Compare "2" and 12.
// console.log("2" == 12);   // false
// console.log("2" === 12); // false
// console.log("2" > 12); // false
// console.log("2" < 12); // True


//4. Compare arrays: [] == [], [] === [].
// let a = [];
// let b = [];
// console.log(a === b);  // false ❌, the variable store at different memory

// let a = [];
// let b = a;
// console.log(a === b); // true ✅ (same reference), locate at same memory


//+ 5. Explain why null >= 0 is true but null > 0 is false.
// console.log(null >= 0);     //Comparison operators (> < >= <=) convert null to a number --- 0>=0 true
// console.log(null > 0);      //→ 0 > 0   false❌

//-----------------------------------------------------------------
//5.) Memory (stack & Heap)

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
let user = {Name: "Sultan Ahmed", Age: 20}

user.Age = 25

console.log(user);

