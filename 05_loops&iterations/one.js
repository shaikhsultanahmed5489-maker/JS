// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
       
    }    
}


let myarray = ["flash", "batman", "superman"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
    
}


// break & Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
    // console.log(`Value of i is ${index}`);
    
    
}