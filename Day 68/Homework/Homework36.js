function maxIndex(arr) {
  let max = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return index;
}

console.log(maxIndex([10, 20, 5, 30, 25])); 
