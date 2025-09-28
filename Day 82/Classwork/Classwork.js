const numbers = [1, 4, 7, 10, 15, 20, 25];


const filteredNumbers = [];

// for ციკლის საშუალებით ვფილტრავთ მხოლოდ იმ რიცხვებს რომლებიც მეტია 10-ზე
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    filteredNumbers.push(numbers[i]);
  }
}

// ვბეჭდავთ საბოლოო შედეგს
console.log("Filtered Numbers (greater than 10):", filteredNumbers);
