// 1) ზოგადი ახსნა კომენტარებში:

// JavaScript არის პროგრამირების ენა, რომელიც გამოიყენება ვებსაიტების დინამიური ქცევის შესაქმნელად.
// ის გვაძლევს საშუალებას, ვუპასუხოთ მომხმარებლის ქმედებებს, ვმართოთ ელემენტები და შევასრულოთ ლოგიკა ბრაუზერში.

// Scripting ენა ძირითადად გამოიყენება ავტომატიზაციისთვის, ხოლო programming ენა შეიძლება იყოს უფრო ზოგადი დანიშნულების.
// თუმცა, JavaScript დღეს უკვე სრულფასოვანი პროგრამირების ენაა.

// მონაცემთა ტიპები: string, number, boolean, undefined, null, object, symbol, bigint

let name = "John"; // string
let age = 25;       // number
let isOnline = true; // boolean
let empty = null;    // null
let notDefined;      // undefined

// კონკატენაცია vs Template Literal
let firstName = "Jane";
let lastName = "Doe";
console.log(firstName + " " + lastName); // კონკატენაცია
console.log(`Welcome, ${firstName} ${lastName}`); // Template literal (ES6+)

// კუთვნილებები და მეთოდები
let message = "hello";
console.log(message.length); // length არის კუთვნილება
console.log(message.toUpperCase()); // toUpperCase არის მეთოდი

// ჩაშენებული ობიექტები: Math, Date, Array, String, Object
console.log(Math.random());
console.log(new Date());

// ცვლადები: var, let, const (ES6)
var x = 10; // function scope
let y = 20; // block scope
const z = 30; // constant

// მასივები:
let numbers = [1, 2, 3, 4];
console.log(numbers[0]); // წვდომა მასივის ელემენტზე

// ES6 ფუნქციონალი: let, const, arrow functions, template literals, destructuring, spread/rest
const sum = (a, b) => a + b; // arrow function

// Conditional Statements:
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C ან ნაკლები");
}

// ლოგიკური ოპერატორები: && (AND), || (OR), ! (NOT)
let loggedIn = true;
let hasPermission = false;
if (loggedIn && hasPermission) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Truthy და Falsy:
// Falsy: false, 0, "", null, undefined, NaN
// დანარჩენი მნიშვნელობები ითვლება truthy-დ

// Ternary Operator
let isMember = true;
console.log(isMember ? "Welcome back!" : "Please sign up.");