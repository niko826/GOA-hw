function myMap(array, callback) {
  let result = []; // ვქმნით ცარიელ მასივს
  for (let i = 0; i < array.length; i++) {
    // თითოეული ელემენტისთვის ვიძახებთ callback-ს
    let mappedValue = callback(array[i], i, array);
    // მიღებულ შედეგს ვამატებთ ახალ მასივში
    result.push(mappedValue);
  }
  return result; // ვაბრუნებთ ახალ მასივს
}

// გამოყენება:
let doubled = myMap([1, 2, 3], function(num) {
  return num * 2;
});
console.log(doubled); 




// forEach - არ აბრუნებს ახალ მასივს, უბრალოდ ასრულებს მოქმედებას თითოეულ ელემენტზე
// map - აბრუნებს ახალ მასივს, სადაც ყოველი ელემენტი გარდაქმნილია callback ფუნქციის მიხედვით
