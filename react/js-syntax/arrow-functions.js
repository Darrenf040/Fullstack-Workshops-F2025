// run file: node arrow-functions.js

// ✅ Traditional function stored in a variable

const hi = function () {
  console.log("hello");
};
// hi();

// ✅ Arrow function with ONE parameter (implicit return)
const num = (x) => x;
// console.log(num(10));

// ✅ Arrow function with MULTIPLE parameters (implicit return)

// ✅ Arrow function with NO parameters

// ✅ Arrow function with EXPLICIT return (block body)

const sum = (x, y) => {
  return x + y;
};
console.log(sum(2, 3));
