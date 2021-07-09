// Business (or back-end) logic:

let add = (number1, number2) => {
    return number1 + number2;
};

let subtract = (number1, number2) => {
    return number1 - number2;
};


let multiply = (number1, number2) => {
    return number1 * number2;
};

let divide = (number1, number2) => {
    return number1 / number2;
};

let number1 = parseInt(prompt("Enter a number:"));
let number2 = parseInt(prompt("Enter another number:"));
alert(add(number1, number2));