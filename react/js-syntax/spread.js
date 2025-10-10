// RUN FILE: node spread.js

// ✅ Array spread

const firstNumbers = [1, 2, 4];
const newNumbers = [...firstNumbers, 5, 6];

console.log(newNumbers);

// ✅ Object spread

const user = {
  name: "bob",
  age: 20,
};
const updatedUser = {
  ...user,
  isAdult: true,
};

console.log(updatedUser);
