function allEven(arr) {
  for (let num of arr) {
    if (num % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(allEven([2, 4, 6])); 
console.log(allEven([2, 3, 4])); 
