// RUN FILE: node destructuring.js

// ✅ Object Destructuring
const user = {
  name: "bob",
  age: 20,
};

const { name, age } = user;
console.log(name, age);

console.log(user);

// ✅ Array Destructuring
const nums = [1, 2, 3];
const [firstNumber, secondNumber] = nums;

console.log(firstNumber, secondNumber);
