
//1. Compare using both: == and === "5" and 5 true and 1 null and undefined

// console.log("5" == 5);
// console.log("5" === 5);

// console.log(true == 1);
// console.log(true === 1);

// console.log(null == undefined);
// console.log(null === undefined);


//2. Compare "Apple" and "Banana".
// console.log("Apple" == "Banana");  // false
// console.log("Apple" === "Banana");  // false
// console.log("Apple" > "Banana");  // false
// console.log("Apple" < "Banana");  // True


//3. Compare "2" and 12.
// console.log("2" == 12);   // false
// console.log("2" === 12); // false
// console.log("2" > 12); // false
// console.log("2" < 12); // True


//4. Compare arrays: [] == [], [] === [].
// let a = [];
// let b = [];
// console.log(a === b);  // false ❌, the variable store at different memory

// let a = [];
// let b = a;
// console.log(a === b); // true ✅ (same reference), locate at same memory


//+ 5. Explain why null >= 0 is true but null > 0 is false.
// console.log(null >= 0);     //Comparison operators (> < >= <=) convert null to a number --- 0>=0 true
// console.log(null > 0);      //→ 0 > 0   false❌
