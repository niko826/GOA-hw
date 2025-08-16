class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}


class Dog extends Animal {
  constructor(name, age, energy) {
    super(name, age); 
    this.energy = energy;
  }

  set setEnergy(value) {
    if (value > 50) {
      this.energy = value;
    } else {
      console.log("Energy must be greater than 50");
    }
  }
}


const myDog = new Dog("Buddy", 3, 80);
console.log(myDog.describe()); 
myDog.setEnergy = 60;
console.log("Dog's energy:", myDog.energy);
myDog.setEnergy = 40; 
