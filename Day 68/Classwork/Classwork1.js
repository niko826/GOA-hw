const cars = ["BMW", "Toyota", "Ferrari"];

// for...in - აბრუნებს ინდექსებს
for (let index in cars) {
  console.log(`for...in → index: ${index}, car: ${cars[index]}`);
}

// for...of - აბრუნებს უშუალოდ მნიშვნელობებს
for (let car of cars) {
  console.log(`for...of → car: ${car}`);
}
