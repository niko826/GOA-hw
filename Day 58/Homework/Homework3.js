function checkOddSum(a, b, c) {
  let sum = 0;

  if (a % 2 !== 0) sum += a;
  if (b % 2 !== 0) sum += b;
  if (c % 2 !== 0) sum += c;

  if (sum > 15) {
    console.log(true);
  } else {
    console.log(false);
  }
}


checkOddSum(5, 7, 6); 
checkOddSum(9, 5, 3); 
