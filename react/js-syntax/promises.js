// RUN FILE: node promises.js
console.log("start");

const p = new Promise((resolve, reject) => {
  const num = 12;

  if (num > 10) {
    resolve("Number is greater than 10");
  } else {
    reject("Number is not greater than 10");
  }
});

p.then((response) => console.log(response)).catch((response) =>
  console.log(response)
);
console.log("end");
