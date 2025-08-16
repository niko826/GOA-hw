let str = prompt("შეიყვანეთ სიტყვა:");
let reversed = str.split('').reverse().join('');

if (str === reversed) {
  console.log("ეს არის პალინდრომი");
} else {
  console.log("ეს არ არის პალინდრომი");
}
