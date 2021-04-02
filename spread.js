// Opérateur spread

const nombres = [10,20,30,40,50];
console.log(nombres);
console.log(...nombres);

// Copie de tableau

const tab2 = Array.from(nombres);

const tab3 = [...nombres];

console.log(tab3);

const pairs = [0,2,4,6,8];
const impairs = [1,3,5,7,9];
// const numbers = pairs.concat(impairs);
const numbers = [...pairs,...impairs];

console.log(numbers);