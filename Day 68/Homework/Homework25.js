let obj = { first: 1, second: 2, third: 3 };

let allNumbers = Object.values(obj).every(value => typeof value === "number");

console.log(allNumbers);
