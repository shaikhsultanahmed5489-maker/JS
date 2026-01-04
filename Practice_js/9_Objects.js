//1.	Create an object: name, age, email, isStudent.

let student = {
    Name: "Sultan Ahmed",
    Age: 20,
    Email: "sultan@gmail.com",
    isStudent: true
}
console.log(student);
console.log("\n");

//2.	Add a new property dynamically.

// student.gender = "Male"
student["gender"] = "Male"
console.log(student);
console.log("\n");

//3.	Delete a property.

delete student.gender
console.log(student);
console.log("\n");

//4.	Loop through keys using for...in.

for (const key in student) {    
    // console.log(student[key]);   
    console.log(key);   
}
console.log("\n");

//5.	Nest another object inside.

student.address = {
    city: "Ahmedabad",
    State : "Gujarat"
}
console.log(student.address.city);
// console.log(student);
console.log("\n");

//6. Check if a property exists.

console.log("Name" in student);
console.log("\n");

//7.	Destructure name and age from an object.

const {Name, Age} = student
console.log(Name);
console.log(Age);
console.log("\n");

//8.	Rename destructured property using alias.

const{ Name: studentName, Email: studentEmail} = student;

console.log(studentName)
console.log(studentEmail);

console.log("\n")

//9.	Convert object to JSON.

let tojson = JSON.stringify(student)

console.log(tojson);
console.log(typeof tojson);
console.log("\n")

//10.	Convert JSON string back to object.

let nottojson = JSON.parse(tojson)
console.log(nottojson);
console.log(typeof nottojson);
console.log("\n")

//11.	Destructure nested values.

const {
    address:{city, State}
} = student

console.log(city);
console.log("\n")

//12. Freeze an object and attempt to modify it.
Object.freeze(student)

student.name= "hamza";
console.log(student)

console.log("\n")

//13.  Count the number of keys in an object

let count = 0

for (const key in student) {
    count++
     
}

console.log(count)

console.log("\n")

//14. Check if an object is empty

let obj = {};

let isEmpty = Object.keys(obj).length === 0;

console.log(isEmpty);