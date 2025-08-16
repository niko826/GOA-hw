function passwordvalidator(password) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = `0123456789`

    let hasDigits = false;
    let hasLetters = false;

for(let i = 0;i < letters.length;i++){
    if(password.includes(letters[i]))
        hasLetters = true;
}
for(let i = 0;i < numbers.length;i++){
    if(password.includes(numbers[i]))
        hasDigits = true;
}   
if(hasDigits&&hasLetters&& password.length > 6){
return `password is strong`
}
 else{ return  'The Password Must Contain numbers and letters and it should be at least 6 characters long';
}
}

console.log(passwordvalidator('nikagiorgi luka 23390862'))