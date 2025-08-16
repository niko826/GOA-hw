const person = {
  firstName: "Nikoloz",
  lastName: "Licheli",
  
  introduce: function () {
    console.log(`Hello my fullname is: ${this.firstName} ${this.lastName} !`);
  }
};


person.introduce();
