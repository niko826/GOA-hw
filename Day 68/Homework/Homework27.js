let strings = ["cat", "elephant", "dog", "giraffe"];

let longest = strings.reduce((a, b) => a.length > b.length ? a : b);
console.log(longest); 
