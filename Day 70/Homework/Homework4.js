/*
განსხვავება Class and Function Constructor შორის:

1) სინტაქსი:
   - Class არის თანამედროვე (ES6) სინტაქსი, რომელიც კოდის წაკითხვას და ორგანიზებას ამარტივებს.
   - Function Constructor არის ძველი მეთოდი ობიექტების შესაქმნელად.

2) მეთოდები:
   - Class-ის მეთოდები ავტომატურად ემატება prototype-ში.
   - Function Constructor-ში თუ მეთოდი შიგნით დავწერეთ, ის თითოეულ ობიექტზე ცალკე იქმნება.

3) ჰოსტინგი:
   - Class-ები არ ხდება hoisting (არ შეიძლება გამოყენება გამოცხადებამდე).
   - Function Constructor შეიძლება გამოვიყენოთ hoisting-ის გამო, თუ var/let/const არ არის გამოყენებული.

4) Extending:
   - Class-ები ადვილად მემკვიდრეობენ `extends` keyword-ის გამოყენებით.
   - Function Constructor მემკვიდრეობა Prototype-ის საშუალებით უნდა გაკეთდეს.
*/