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