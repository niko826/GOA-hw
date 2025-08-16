let text = "გამარჯობა, როგორ ხარ?";
let vowels = "აეიოუ";
let count = 0;

for (let char of text.toLowerCase()) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log("ხმოვნების რაოდენობაა:", count);
