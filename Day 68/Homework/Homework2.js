let number = parseFloat(prompt("enter the number: "));

if (number > 0){
    console.log("the number is positive");
}
else if (number < 0){
      console.log("the number is negative");
}
else {
    console.log("the number is zero");
}

if (Number.isInteger(number)){
    console.log("the number INT");
}

else{
    console.log("the number is float");
}