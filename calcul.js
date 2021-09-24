
let firstValue = prompt("First value");
let operator = prompt("+ / - / /");
let secondValue = prompt("secondValue");

firstValue = parseInt(firstValue);
secondValue = parseInt(secondValue);

switch (operator) {
    case "+":
        console.log(firstValue + secondValue);
        break;
    case "-":
        console.log(firstValue - secondValue);
        break
    case "/":
        console.log(firstValue / secondValue);
    default:
        break;
}

if (operator === "+") {
    console.log(firstValue + secondValue);
} else {
    console.log(firstValue - secondValue);
}