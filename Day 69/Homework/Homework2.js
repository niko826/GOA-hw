function Person(name, surname, age, country) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.country = country;

  if (name.length >= 4) {
    console.log("Name:", this.name);
  } else {
    console.log("The person's name should contain at least 4 characters");
  }

  this.aboutThePerson = function () {
    console.log(
      `The person's name is ${this.name}, surname ${this.surname}, the person's age is ${this.age} and person lives in ${this.country}`
    );
  };
}

const p1 = new Person("Ana", "Kopaleishvili", 30, "Georgia");
p1.aboutThePerson();
