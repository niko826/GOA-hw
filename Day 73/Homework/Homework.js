let randomPromise = new Promise((resolve, reject) => {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  if (randomNum > 3) {
    resolve(`${randomNum} is more than 3`);
  } else {
    reject(`${randomNum} should be more than 3`);
  }
});

randomPromise
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
