const items = ["apple", "banana", "apple", "orange", "banana", "kiwi"];

const frequency = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(frequency);
