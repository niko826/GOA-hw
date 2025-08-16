//1)
class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  startEngine() {
    console.log(`The engine of ${this.brand} is starting.`);
  }


  getInfo() {
    return `This is a ${this.brand} made in ${this.year}.`;
  }
}

//2)
class Car extends Vehicle {
  constructor(brand, year, doors) {
    super(brand, year); 
    this.doors = doors;
  }

  honk() {
    console.log("Beep Beep!");
  }
}
//3)
class Motorcycle extends Vehicle {
  constructor(brand, year, hasSidecar) {
    super(brand, year);
    this.hasSidecar = hasSidecar;
  }

  revEngine() {
    console.log("Vrrroooooooooooooom!");
  }
}
