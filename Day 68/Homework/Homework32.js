function capitalizeFirstLetters(arr) {
  return arr.map(word => word[0].toUpperCase() + word.slice(1));
}

console.log(capitalizeFirstLetters(["hello", "world"])); 
