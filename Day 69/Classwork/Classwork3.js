class Account {
  #password;
  #email;

  constructor(name, email, password) {
    this.name = name;
    this.#email = email;
    this.#password = password;
  }


  introduce() {
    console.log(`My name is ${this.name}`);
  }

 
  set setPassword(newPassword) {
    const hasLetter = /[a-zA-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);

    if (newPassword.length >= 6 && hasLetter && hasNumber) {
      this.#password = newPassword;
      console.log("Password successfully changed.");
    } else {
      console.log("Password must be at least 6 characters long and contain both letters and numbers.");
    }
  }


  get getEmail() {
    return this.#email;
  }
}
