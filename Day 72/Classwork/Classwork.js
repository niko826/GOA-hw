
const accounts = [];


class Account {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }


  static checkIfExists(email) {
    return accounts.some(account => account.email === email);
  }

  static AddToStorage(accountObj) {

    if (Account.checkIfExists(accountObj.email)) {
      alert("რეგისტრაცია წარუმატებლად დასრულდა - ეს იმეილი უკვე რეგისტრირებულია");
      return; 
    }


    accounts.push(accountObj);
    console.log("რეგისტრაცია წარმატებით დასრულდა!");
  }
}

const acc1 = new Account("Luka", "luka@mail.com");
Account.AddToStorage(acc1); 

const acc2 = new Account("Nika", "luka@mail.com");
Account.AddToStorage(acc2); 

console.log(accounts);
