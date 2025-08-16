const words = ["hello", "world", "js"];
const totalChars = words.reduce((acc, word) => acc + word.length, 0);
console.log(totalChars); 
