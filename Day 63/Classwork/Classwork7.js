const filterOutNumber = (arr, num) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      result.push(arr[i]);
    }
  }
  return result;
};
