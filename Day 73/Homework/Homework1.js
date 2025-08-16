let orderPromise = new Promise((resolve, reject) => {
  let orderReady = true; 

  if (orderReady) {
    resolve("Your order is ready");
  } else {
    reject("Your order got declined");
  }
});

orderPromise
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
