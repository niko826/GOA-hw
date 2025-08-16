function myForEach(array, callback) {
  // ვარჩევთ ყველა ელემენტს მასივიდან
  for (let i = 0; i < array.length; i++) {
    // თითოეულ ელემენტზე ვასრულებთ callback ფუნქციას
    callback(array[i], i, array);
  }
}

// გამოყენება:
myForEach([1, 2, 3], function(num) {
  console.log(num * 2);
});
