const user = {
  name: "Nika",
  surname: "licheli",
  age: 16,
  country: "Georgia",

  
  get info() {
    return `${this.name} ${this.surname} lives in ${this.country}`;
  },


  set setAge(newAge) {
    if (newAge >= 18) {
      this.age = newAge;
    } else {
      console.log("The person is not an adult");
    }
  }
};


console.log(user.info); 


user.setAge = 19;
console.log(user.age); 

user.setAge = 16;


/*
   განსხვავება getter და setter შორის:
  - getter არის მეთოდი, რომელიც აბრუნებს ობიექტის მონაცემს ისე, თითქოს კუთვნილებაა.
  - setter გამოიყენება მონაცემის დასაყენებლად და ხშირად ლოგიკას შეიცავს.
*/
