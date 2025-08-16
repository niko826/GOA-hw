const people = [
  { name: "Anna", age: 20 },
  { name: "Luka" }, // age is undefined
  { name: "Nino", age: 25 }
];

const hasUndefined = people.some(person => person.age === undefined);
console.log(hasUndefined); 

