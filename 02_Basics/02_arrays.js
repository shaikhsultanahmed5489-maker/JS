const marvel_heros = ["thor", "Ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros . push (dc_heros )
// console . log (marvel_heros) ;


// const allheros = marvel_heros.concat(dc_heros)  // It will merge the 2 arrays
// console.log(allheros);

const all_newhero = [...marvel_heros, ...dc_heros]  //it will also merge the 2 arrays

// console.log(all_newhero);
// console.log(all_newhero[2]);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)     //flat() removes nested arrays and makes one single flat array.
console.log(real_another_array);


console.log(Array.isArray("Sultan") )       //checks whether the value "Sultan" is an array or not.
console.log(Array.from("Sultan") )          //converts an iterable (like a string) into an array of characters.
console.log(Array.from({name: "Sultan"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));     //NEW array with those 3 values.
