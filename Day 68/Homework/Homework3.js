let num1 = parseFloat(prompt("enter the first number:"));
let num2 = parseFloat(prompt("enter the second number:"));
let operator = prompt("enter the operators (+, -, *, /):")

switch(operator){
    case "+":
    console.log(`Anwser: ${num1 + num2}`);
    break;
    case "-":
    console.log(`Anwser: ${num1 - num2}`);
    break;
    case "*":
    console.log(`Anwser: ${num1 * num2}`);
    break;
      case "/":
    if (num2 !== 0) {
      console.log(`Anwser: ${num1 / num2}`);
    } else {
      console.log("Error: you can't divide by zero FOOL!");
    }
    break;
  default:
    console.log("Wrong operator try +, -, * or /");
}






