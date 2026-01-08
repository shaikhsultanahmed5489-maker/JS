//1.	Validate input and exit early if it is invalid.

let age = 5

if (typeof age !== "number" || age < 0 ) {
    console.log("Invalid Age, give number");
    
} else {
    console.log(`Valid Age: ${age}`);   
}
console.log("\n");

//2.	Decide between three outcomes using if / else if / else.

let temperature = 30;

if (temperature > 35) {
    console.log("Hot");
} else if (temperature >= 20) {
    console.log("Warm");
} else {
    console.log("Cold");
}

console.log("\n")

//3.	Rewrite the same logic using switch.

let result;

switch (true) {
    case (temperature > 30):
        result = "It's hot";
        break;

    case (temperature >= 20):
        result = "It's warm";
        break;

    default:
        result = "It's cold";
}

console.log(result);
console.log("\n");


//4.	Handle a default or fallback case safely.
let role = "guest";

switch (role) {
    case "admin":
        console.log("Full access");
        break;

    case "user":
        console.log("Limited access");
        break;

    default:
        console.log("Read-only access");
}

console.log("\n")

//5.	Prevent code execution when required data is missing.

// let username = ""
// let Password = "12345"

// if (!username) {
//     console.log("Requried data Missing. Access Denied");
// } else {
//     console.log("Login Successfull");   
// }
// console.log("\n");

let username = "Sultan";

if (!username) {
    console.log("Username is required");
    return;
}

console.log("Welcome,", username);
console.log("\n")

//6.	Replace nested if statements with guard clauses.

function withdrawn(balance,amount) {
    if(balance < 0) return;
    if(amount < 0) return;
    if(balance < amount) return;

    console.log("Withdrawal successful");

}
withdrawn(100,50)
console.log("\n");

//7.	Control logic based on a "loading" | "error" | "success" state.

function showStatus(state) {
    if (state === "loading") {
        console.log("Loading... please wait");
    } else if (state === "error") {
        console.log("Something went wrong");
    } else if (state === "success") {
        console.log("Data loaded successfully");
    }
}
showStatus("loading");
showStatus("error");
showStatus("success");
console.log("\n");

//8.	Use return to stop execution at the correct time.

function checkage(age){
    if(age < 0){
        return "Invalid age"
    }
    return age >= 18 ? "Adult" : "Minor"
}
console.log(checkage(5));
console.log("\n");

//9.	Convert a simple if/else to a ternary only if readability improves.

let isLoggendIn = true
let message = isLoggendIn ? "Welcome Back" : "Please Log in";

console.log(message);
console.log("\n");

//11.	Break a complex condition into named variables.

let age1 = 25;
let isCitizen = true;
let hasLicense = true;

let isAdult = age1 >= 18 && age1 <= 60;
let isEligibleCitizen = isCitizen === true;
let hasValidLicense = hasLicense === true;

if (isAdult && isEligibleCitizen && hasValidLicense) {
    console.log("You are Eligible to Drive");
}
console.log("\n");

//12.	Use switch(true) to group complex conditional logic.
let age2 = 12;
let category;
switch (true) {
    case age2 < 13:
        category = "Child";
        break;

    case age2 >= 13 && age2 < 18:
        category = "Teen";
        break;

    case age2 >= 18 && age2 <= 60:
        category = "Adult";
        break;

    default:
        category = "Senior";
}
console.log(category);

function getDiscount(price, isMember) {
    switch (true) {
        case price >= 1000 && isMember:
            return "30% discount";

        case price >= 1000:
            return "20% discount";

        case price >= 500:
            return "10% discount";

        default:
            return "No discount";
    }
}

console.log(getDiscount(1200, true));

console.log("\n")

//13.	Flatten deeply nested logic using early returns.
function login(user) {
    if (!user) return "No user";
    if (!user.isActive) return "Inactive user";
    if (user.role !== "admin") return "Not admin";

    return "Access granted";
}
console.log(login(null));
console.log(login({ isActive: false, role: "admin" }));
console.log(login({ isActive: true, role: "user" }));
console.log(login({ isActive: true, role: "admin" }));
console.log("\n");

//14.	Use nullish coalescing (??) to provide safe defaults without overriding valid falsy values.
let count = 0;
let result1 = count ?? 10;

console.log(result1);
