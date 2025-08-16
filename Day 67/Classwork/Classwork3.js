
const nums = [1, 3, 5, 8, 9];
const evenIndex = nums.findIndex(num => num % 2 === 0);
console.log(evenIndex); 


const students = ["Gio", "Mariam", "Luka"];
const mariamIndex = students.findIndex(name => name === "Mariam");
console.log(mariamIndex); 


const people = [
  { name: "Ana", age: 17 },
  { name: "Dato", age: 20 },
  { name: "Nino", age: 16 }
];

const adultIndex = people.findIndex(person => person.age > 18);
console.log(adultIndex); 