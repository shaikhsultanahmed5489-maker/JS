const  promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
        
    }, 1000);
});


promiseOne.then(function(){
    console.log("promise consumed");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "sultan", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();



//----------------------------------------


//          Practice


//1.	Create a Promise that resolves after 2 seconds.

const p1 = new Promise(function(resolve,reject) {
    setTimeout(() => {
  resolve("Promise resolved after 2 seconds");        
        
    }, 2000);
})

p1.then((message) => {
  console.log(message);
});



//2.	Create a Promise that rejects based on a condition.
//3.	Handle a rejected Promise safely without crashing the app.

const conditionalPromise = new Promise((resolve, reject) => {
  let success = false; // change to true to resolve

  if (success) {
    resolve("Operation successful ✅");
  } else {
    reject("Operation failed ❌");
  }
});


conditionalPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  console.log("App still running without any crash");
  

//  4.	Demonstrate what happens when a Promise is neither resolved nor rejected.

const promise4 = new Promise((resolve,reject) => {

});

promise4
.then((msg) => {
    console.log("accepted");
})
.catch((err) => {
    console.log("denied");
})

console.log("end");

//5.	Show what happens when you forget to return a Promise inside .then().

const promise5 = new Promise((resolve) => {
  resolve("Step 1 completed ✅");
});

promise5
  .then((msg) => {
    console.log(msg);

    // ❌ Forgot to return the Promise
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 2 completed ❌");
      }, 2000);
    });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("error", err);
  });

console.log("end 5");




//6. Demonstarte a unhandled rejection.

function rejectPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      reject("Something rejected")
    }, 1000);
  })
}


async function Executor() {
  try {
  const promise6 = await rejectPromise();

  console.log(promise6);
  } catch (error) {
    console.log(error);
    
  }
}

Executor();


//7.. Demonstrate resolve vs reject being called twice 

const promiseResolve = new Promise((resolve) => {
  resolve("First resolve")
  resolve("second resolve")
})

promiseResolve.then(value => {
  console.log("Resolved with:", value);
  
})


const promiseReject = new Promise((_,reject) => {
  reject("reject resolve")
  reject("reject resolve")
})

promiseReject.catch(value => {
  console.log("reject with:", value);
  
})

 

