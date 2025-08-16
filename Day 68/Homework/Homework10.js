const users = [
  { name: "Luka", isActive: true },
  { name: "Nino", isActive: false },
  { name: "Giorgi", isActive: true },
];

const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers);
