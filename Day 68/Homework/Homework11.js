const items = ["apple", "banana", "apple", "orange", "banana", "kiwi"];

const uniqueItems = items.filter((item, index) => {
  return items.indexOf(item) === index;
});

console.log(uniqueItems); 
