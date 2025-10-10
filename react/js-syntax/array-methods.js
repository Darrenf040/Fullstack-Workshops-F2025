// RUN FILE:

const numbers = [1, 2, 3, 4, 5];

// 1. forEach - just runs a function for side effects
// numbers.forEach((num) => console.log(num));

// 2. map - returns a new array
const doubleNumber = numbers.map((num) => num * 2);
// console.log(doubleNumber);

// 3. filter - returns a new array with elements that pass a condition
const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);

// 4. some - checks if any element passes the condition

// 5. every - checks if all elements pass the condition

// 6. find - returns the first element that passes the condition
