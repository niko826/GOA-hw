const Chance = require('chance');
const chance = new Chance();


console.log("Name:", chance.name());


console.log("Email:", chance.email());


console.log("Telephone:", chance.phone());


console.log("Birthday:", chance.birthday({ string: true }));

console.log("Number:", chance.integer({ min: 1, max: 100 }));
