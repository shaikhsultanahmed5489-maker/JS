const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);


// console.log(balance.toString());
// console.log(typeof balance );

 
// console. log (balance. toString() . length) ;
// console. log (balance. toFixed (1) ) ;

const otherNumber =123.8966
// console. log (otherNumber. toPrecision (4) ) ;

const hundreds = 100000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));



//******************  Maths  *************

// console. log (Math) ;
// console. log (Math. abs ) ;
// console. log (Math. round (4.6)); // it will make roundof like, if no. is lower than .5 it will take the same value , otherwise it will +by 1 
// console. log (Math. ceil (4.2));    //it will +1 on no. (5)
// console. log (Math. floor(4.9));    //it will -1 on no. (4)
// console. log (Math. min(4,7,2,6)); 
// console. log (Math. max(4,7,2,6)); 


console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 +1 );  //gurrante min value will be 1 not 0

console.log(Math.floor(Math.random() * 10));  // 0 to 9 for whole no like 2

const min = 10
const max = 20
console. log (Math. floor (Math. random() * (max - min + 1)) + min)
