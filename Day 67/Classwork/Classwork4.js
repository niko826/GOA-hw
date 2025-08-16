function manualFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

const names = ["Ana", "Mariam", "Luka"];
const index = manualFindIndex(names, name => name.startsWith("M"));
console.log(index); 


