//  კონსტრუქტორი არის სპეციალური ფუნქცია (Function ან Class)
// რომელიც გვაძლევს საშუალებას შევქმნათ მრავალი ობიექტი ერთნაირი სტრუქტურით
// მასში ვიყენებთ this-ს  რომ მივანიჭოთ კუთვნილებები

function Car(brand, model, year) {
  // this  იმ ობიექტს მიუთითებს რომელიც ახლახანს შეიქმნება
  this.brand = brand;
  this.model = model;
  this.year = year;

  // introduce მეთოდი რომელიც აღწერს მანქანას
  this.introduce = function () {
    console.log(`Car: ${this.brand} ${this.model}, made: ${this.year}`);
  };
}

const car1 = new Car("Toyota", "camry",1980);
const car2 = new Car("The Lamborghini", "Huracán", 2014);
const car3 = new Car(" Mazda", "RX-7 FD", 1992);
const car4 = new Car("Mercedes", "E-Class", 2022);


car1.introduce(); 
car2.introduce(); 
car3.introduce(); 
car4.introduce(); 
