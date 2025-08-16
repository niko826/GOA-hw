const spaces = function(sentence) {
  let spaceCount = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      spaceCount++;
    }
  }
  return spaceCount;
};

//const result = countSpaces("this is one sentence");
//console.log(result); 