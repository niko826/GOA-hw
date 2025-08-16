let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenCount = 0;
let oddCount = 0;

for (let num of numbers) {
  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log(`evencount: ${evenCount}`);
console.log(`oddcount: ${oddCount}`);
