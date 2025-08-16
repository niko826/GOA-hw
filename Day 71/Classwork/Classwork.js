const account = {
_email: "user@example.com",
_pass: "Password123",
fullname: "Nikoloz licheli",

 
  get email() {
    return this._email;
  },

  set pass(newPass) {
    if (newPass.length >= 6) {
      this._pass = newPass;
      console.log("Password changed succsefully");
    } else {
      console.log("password length must be at least 6 characters");
    }
  },


  greet: function () {
    console.log(`Hello i am: ${this.fullname}`);
  }
};


account.pass = "123";          
account.pass = "NewPass812";   


console.log("Email:", account.email); 


account.greet(); 


