const names = ["Nika", "Giorgi", "Mariami", "Nika"];

const uniqueNamesArray = []; 

for (let name of names) {

  if (!uniqueNamesArray.includes(name)) {
    uniqueNamesArray.push(name); 
  }
}

for (let name of uniqueNamesArray) {
  console.log(`uniquename: ${name}`);
}
