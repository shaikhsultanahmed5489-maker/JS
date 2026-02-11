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
            console.log(`${name}: Done`);
            resolve(name)
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



//9.	An async function that: Awaits it, Logs the result

function getmsg() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async Await is awesome")
    }, 1000);
  })
}


async function run() {
  const result = await getmsg();
  console.log(result);
  
}

run();


//10.	Multiple Async Calls.

function taskOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task One completed ✅");
    }, 1000);
  });
}

function taskTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task Two completed ✅");
    }, 1500);
  });
}


async function runSequential() {
  const result1 = await taskOne();
  console.log(result1);

  const result2 = await taskTwo();
  console.log(result2);

  console.log("All tasks done (Sequential)");
}

// runSequential();



//11.	Controlled Parallel Execution.
async function runTasks() {
  const tasks = [
    () => task("Task A", 1000),
    () => task("Task B", 2000),
    () => task("Task C", 1500),
  ];

  let index = 0;
  const limit = 2;

  async function runner() {
    if (index >= tasks.length) return;

    const currentTask = tasks[index++];
    await currentTask();

    await runner();
  }

  const workers = [];
  for (let i = 0; i < limit; i++) {
    workers.push(runner());
  }

  await Promise.all(workers);
}

// runTasks();






//12.	Rewrite a Promise chain using async/await.

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User fetched");
    }, 1000)
  })
}


function getPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${user}'s posts fetched`);
    }, 1000)
  })
}


function getComments(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${posts} & comments fetched`);
    }, 1000);
  });
}


getUser()
.then((user) => {
  return getPosts(user);
})
.then((posts) => {
  return getComments(posts);
})
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error);
});



//13.	Promise.allSettled()

const p1 = Promise.resolve("Task 1 success");

const p2 = new Promise((_, reject) => {
  setTimeout(() => reject("Task 2 failed"), 1000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Task 3 success"), 1500);
});


Promise.allSettled([p1, p2, p3])
.then((results) => {
  console.log(results);
})




//15.	Promise.any()


Promise.any([p1, p2, p3]) 
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })



//👉 Promise.any() returns the FIRST Promise that is fulfilled (resolved).
//❌ It ignores rejected Promises.



//16.	Timeout Guard Using Promise.race


function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 3000);
  });
}

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request timed out ⏰");
    }, ms);
  });
}


async function safeFetch() {
  try {
    const result = await Promise.race([
      fetchData(),
      timeout(2000)
    ]);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

safeFetch();



//17.	•  Awaiting multiple async calls safely inside try/catch

async function loadData() {
  try {
    const user = await getUser();          // step 1
    const posts = await getPosts(user);    // step 2
    const comments = await getComments(posts); // step 3

    console.log(comments);
  } catch (error) {
    console.error(error);
  }
}

loadData()


//18.	•  Demonstrate how async functions behave when not awaited.

async function greet() {
  return "Hello";
}

const result = greet();
console.log(result);


