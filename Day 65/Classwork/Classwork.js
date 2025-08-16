function greet() {
  console.log("Hello world!");
}

function higherOrderFunction(func) {

  func();
}

higherOrderFunction(greet);
