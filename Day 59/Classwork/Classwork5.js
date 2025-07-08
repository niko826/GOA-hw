// Hoisting ნიშნავს იმას, რომ var-ით გამოცხადებული ცვლადები და function declaration-ით შექმნილი ფუნქციები
// ავტომატურად გადაინაცვლებენ კოდის დასაწყისში, მანამდე, სანამ შესრულება დაიწყება.

// მაგალითითად
sayHello();

function sayHello() {
  console.log("Hello");
}

// var-ის მაგალითი — არ გამოვა შეცდომა, მაგრამ დაბეჭდავს undefined-ს
console.log(name);
var name = "Nika";

// ზემოთ რომ ავწიოთ რეალურად ასეა:
var name;
console.log(name); // undefined
name = "Nika";

// პრობლემა არის რომ ასეთი ქცევა ართულებს კოდის წაკითხვას და შეცდომის აღმოჩენა რთულია აღმოჩენას რთულს.


// რომ გადავჭრათ ეს პრობლემა უნდა გამოვიყენოთ let ან const, რომ თავიდან ავიცილოთ hoisting-ის პრობლემა

// ეს გამოიწვევს შეცდომას  ვერ გამოიყენებ let/const ცვლადს მანამდე, სანამ არ გამოაცხადებ
// console.log(age); // ReferenceError
let age = 16;

// let = ცვლადი, რომელსაც მნიშვნელობას ვუცვლით
// const = ცვლადი, რომლის მნიშვნელობა მუდმივია და შეცვლა არ შეიძლება


// FUNCTION EXPRESSION არის როცა ფუნქციას ვინახავთ ცვლადში. ეს ფუნქცია არ აიწევა.

const greet = function () {
  console.log("Hello");
};

greet(); // მუშაობს მხოლოდ გამოძახების შემდეგ


// ფუნქცია დეკლარაციით (აიწევა)
sayHi();

function sayHi() {
  console.log("Hi");
}


// sayBye(); // ReferenceError
const sayBye = function () {
  console.log("Bye");
};

sayBye();
