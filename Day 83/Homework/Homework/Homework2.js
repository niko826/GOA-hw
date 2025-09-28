const Chance = require("chance");
const chance = new Chance();

console.log("Fullname:", chance.name());
console.log("Email:", chance.email());
console.log("Telephone:", chance.phone());
console.log("Address:", chance.address());