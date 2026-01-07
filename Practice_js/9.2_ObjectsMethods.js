//1.	Iterate using Object.keys()

const user = {
    name: "Aidin",
    age: 18,
    city : "Goa"
}

Object.keys(user).forEach(key => {
    console.log(user[key],":",key);
})
console.log("\n")

//2.	Iterate using Object.values()

Object.values(user).forEach(values => {
    console.log(values);
    
})
console.log("\n")


//3.	Check property using hasOwnProperty

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("email"));
console.log("\n")

//4.	Check property using Object.hasOwn

console.log(Object.hasOwn(user,"name"));
console.log("\n")

//5.	Difference between in vs hasOwn
//in checks both own and inherited properties, while hasOwn checks only the object’s own properties.

//6.	Deep copy using structuredClone

const deepcopy = structuredClone(user)
console.log(deepcopy);

//7.	Compare freeze vs seal vs preventExtensions

Object.preventExtensions(obj);

obj.city = "Delhi";   // ❌ not added
obj.age = 23;         // ✅ allowed
delete obj.name;      // ✅ allowed


Object.seal(obj);

obj.city = "Delhi";   // ❌ not added
obj.age = 23;         // ✅ allowed
delete obj.name;      // ❌ not allowed

Object.freeze(obj);

obj.city = "Delhi";   // ❌ not added
obj.age = 23;         // ❌ not allowed
delete obj.name;      // ❌ not allowed

//9.	Use computed property names
const key = "age";

const user1 = {
  name: "Sultan",
  [key]: 21
};

console.log(user1);
// { name: "Sultan", age: 21 }
