function filter(arr, helper) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (helper(arr[i]) === true) {
      result.push(arr[i]);
    }
  }
  return result;
}





//const numbers = [1, 2, 3, 4, 5];
//const filtered = filter(numbers, isEven);
//console.log(filtered); 