class Account {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  
  static getFromStorage(key) {
    const data = localStorage.getItem(key); 
    const parsedData = JSON.parse(data);   

 
    return parsedData !== null ? parsedData : [];
  }

  static checkIfExists(email) {
    const accounts = Account.getFromStorage("accounts"); 
    return accounts.some(acc => acc.email === email); 
  }


  static AddToStorage(accountObj) {
    const accounts = Account.getFromStorage("accounts");

    if (Account.checkIfExists(accountObj.email)) {
      alert("რეგისტრაცია წარუმატებლად დასრულდა - იმეილი უკვე გამოყენებულია");
      return;
    }


    accounts.push(accountObj);
    localStorage.setItem("accounts", JSON.stringify(accounts)); 
    console.log("რეგისტრაცია წარმატებით დასრულდა!");
  }
}
