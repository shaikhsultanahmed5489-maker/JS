// Dates 

let myDate = new Date()
// console.log(myDate);


// console.log(myDate.toString());
// console.log(myDate.toDateString()); // *
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());   //  *
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2025, 0, 22)
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2025, 0, 22, 4, 10)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2025-02-15")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2025")


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console. log (Math. floor(Date. now( )/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long",
})