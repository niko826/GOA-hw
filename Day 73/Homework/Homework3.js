let agePromise = new Promise((resolve, reject) => {
  let age = 16;

  if (age >= 18) {
    resolve("You are adult");
  } else {
    reject("You are not an adult");
  }
});

agePromise
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
