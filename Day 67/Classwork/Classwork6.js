function manualReduce(arr, callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
}


const nums = [1, 2, 3];
const sum = manualReduce(nums, (acc, val) => acc + val, 0);
console.log(sum); 
