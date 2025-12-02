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
// console.log(loginUserName());


function calculateCartPrice(...num1) {
     return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    name : "Sultan Ahmed",
    price: 199
}

function handleObject(anyObject) {
    console.log(`UserName is ${anyObject.name} and price is ${anyObject.price}`);
    
}

handleObject(user)


const newarray = [200, 300, 400, 100 ]

function returnSecondValue(getarray) {
    return getarray[1]
}

console.log(returnSecondValue(newarray) )