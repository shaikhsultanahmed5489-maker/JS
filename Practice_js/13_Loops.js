//1.	Print numbers 1–50 using: (For, while, Do while)

for (let i = 1; i <= 50; i++) {
    console.log(i);    
}

let i = 1;
while (i <= 50) {
    console.log(i);

    i++;
    
}

i = 1;
do {
    console.log(i);
    
    i++;
} while (i <= 50);
console.log("\n");

//2.	Loop through a string and print characters.

let str = "Sultan"

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);       
}
console.log("\n");

//3.	Skip multiples of 3 using continue.

for (let i = 0; i <= 10; i++) {

    if (i % 3 == 0){
        continue;
    }
    console.log(i);
}

//4.	Stop loop if number reaches 25 using break.

for (let i = 0; i <= 50; i++) {
    if (i === 25) {break}    
    console.log(i);
    
}

