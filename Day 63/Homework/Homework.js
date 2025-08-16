const strings = (string,stringarr) => {
  let array = [];
  if(!stringarr.includes(string)){
    array.push(string);
  }
   return array;     
}

console.log(strings('one', ['two', 'three', 'four']))