// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sultan",
    "full name": "Sultan Ahmed Shaikh",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "sultan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sultan@chatgpt.com"     //to change inside the object
// Object.freeze(JsUser)                //this will frezze the object , after this you cannot change values inside objects
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello JS");
    
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS ,${this.name}`);
    
}

console.log(JsUser.greetingTwo());

// console.log(JsUser.greetings);
// console.log(JsUser.greetings());
