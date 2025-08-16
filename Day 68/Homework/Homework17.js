const user = {
  name: "Luka",
  age: 25,
  isAdmin: false
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
