
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;


  if (this.year < 2000) {
    console.log("This is an old car");
  } else {
    console.log("This is a modern car");
  }


  this.getDescription = function () {
    console.log(`Car: ${this.make} ${this.model} (${this.year}), Color: ${this.color}`);
  };
}


const car1 = new Car("Toyota", "Corolla", 1998, "red");
car1.getDescription();

const car2 = new Car("BMW", "X5", 2015, "black");
car2.getDescription();

const car3 = new Car("Mercedes", "C200", 2022, "white");
car3.getDescription();
