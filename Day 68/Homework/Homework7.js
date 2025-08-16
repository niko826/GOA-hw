let isLoggedIn = [true, false, true, false];

isLoggedIn.forEach(status => {
  console.log(status ? "Welcome" : "Please Log In");
});
