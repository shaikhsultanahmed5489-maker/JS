function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("L");
    console.log("T");
    console.log("A");
    console.log("N");
}

// sayMyName() 


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }


function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // return result
    return number1+number2
}


const result = addTwoNumbers(3, 10)

// console.log("Result:", result);


function loginUserName(UserName) {

    //if(!username)
    if (UserName === undefined) {
        console.log("Please enter a UserName");
        return
    }
    return`${UserName} just logged in`
}

// console.log(loginUserName("Sultan Ahmed"));
console.log(loginUserName());
