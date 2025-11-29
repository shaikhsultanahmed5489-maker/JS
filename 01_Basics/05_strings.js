const name = "Sultan Ahmed"
const age = 20

console.log(`Hello my name is ${name} and my age is ${age}`);


const gameName = new String('Sultan Ahmed Shaikh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));



const newstring = gameName.substring(0,3)
console.log(newstring);

const anotherstring = gameName.slice(-6,6)
console.log(anotherstring);


const newone = "    Sultan    "
console.log(newone);
console.log(newone.trim());



const url = "https://sultan.com/ahmed%20"
console.log(url.replace('%20','-'));


console.log(gameName.split(' '));

