let numbers = [1, 2, 2, 3, 4, 4, 5];

let unique = numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
console.log(unique); 
