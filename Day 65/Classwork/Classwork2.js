function manualForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}


const fruits = ['mango', 'banana', 'melon'];

manualForEach(fruits, function(value, index,) {
  console.log(`value: ${value}, index: ${index}`);
});
