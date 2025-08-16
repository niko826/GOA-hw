class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}


class Student extends Person {
  constructor(name, grade) {
    super(name); 
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying and ${this.name}'s grade is ${this.grade}`);
  }
}

// Testing
const student1 = new Student("Anna", "A");
student1.greet(); 
student1.study(); 
