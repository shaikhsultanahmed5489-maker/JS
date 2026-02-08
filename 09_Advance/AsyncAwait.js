//1.	Missing await.
//2.	With await.
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello")
        }, 1000);
    })
}

async function executer() {
    const a =  promise1();
    console.log(a);
    
}

// executer();

// //3.	Sequential or Parallel.

function task(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name}: Done`)
        }, time);
    })
}

//--------------Sequential-----------

async function Sequential() {
    console.time("sequential");
    
    const a = await task("Task A", 2000);
    console.log(a);

    const b = await task("Task B", 2000);
    console.log(b);

    console.timeEnd("sequential");
   
}

// Sequential();

//-------------------Parallel------------

async function Parallel() {
    console.time("parallel");

    const promsieA = task("Task A", 2000);
    const promsieB = task("Task B", 2000);

    const a = await promsieA;
    const b = await promsieB;

    console.log(a);
    console.log(b);

//                                                   const results = await Promise.all([
//                                                  task("Task 1", 2000),
//                                                  task("Task 2", 2000),
//                                              task("Task 3", 2000)
//                                                  ]);

//   console.log(results);

    console.timeEnd("parallel")   
}

// Parallel();



//5.	Write an async function that always returns a value.

async function getData() {
  const value = await Promise.resolve("Data loaded");
  return value;
}

getData().then((data) => {
  console.log(data);
});



//6.	A function that returns a Promise with setTimeout.

function delayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done after 6 seconds ⏳");
    }, 6000);
  });
}

delayMessage().then((msg) => {
  console.log(msg);
});


//7.	Conditional Rejection.

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Access granted ✅");
    } else {
      reject("Access denied ❌ Age below 18");
    }
  });
}


checkAge(20)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });



//8.	Handle with try/catch.

function loginUser(password) {
  return new Promise((resolve, reject) => {
    if (password === "admin123") {
      resolve("Login successful ✅");
    } else {
      reject("Invalid password ❌");
    }
  });
}

async function handleLogin() {
    try {
        const result = await loginUser("wrongPass");
        console.log(result);
        
    } catch (error) {
        console.log("Error caught:", error);
        
    }
    console.log("App continues running");
    
}

handleLogin();