let words = ["apple", "banana", "car"];
words.forEach(word => {
  let reversed = word.split("").reverse().join("");
  console.log(reversed);
});
