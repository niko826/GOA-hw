function countLetter(str, letter) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (char === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("hello world", "l")); 
