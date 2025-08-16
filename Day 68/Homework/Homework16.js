const users = [
  { name: "Luka", age: 23 },
  { name: "Nino", age: 34 },
  { name: "Ana", age: 17 },
  { name: "Giorgi", age: 42 }
];

const grouped = users.reduce((acc, user) => {
  const range = `${Math.floor(user.age / 10) * 10}-${Math.floor(user.age / 10) * 10 + 9}`;
  if (!acc[range]) acc[range] = [];
  acc[range].push(user);
  return acc;
}, {});

console.log(grouped);
