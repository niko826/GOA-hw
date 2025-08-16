const users = [
  { name: "Luka", age: 25 },
  { name: "Nino", age: 19 },
  { name: "Giorgi", age: 32 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);
