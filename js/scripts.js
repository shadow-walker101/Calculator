// Business (or back-end) logic:

// let add = (number1, number2) => {
//     return number1 + number2;
// };

// let subtract = (number1, number2) => {
//     return number1 - number2;
// };


// let multiply = (number1, number2) => {
//     return number1 * number2;
// };

// let divide = (number1, number2) => {
//     return number1 / number2;
// };

// $(document).ready(() => {
//     $("form#add").submit((event) => {
//         event.preventDefault();
//         let number1 = parseInt($("#add1").val());
//         let number2 = parseInt($("#add2").val());
//         let result = add(number1, number2);
//         $("#output").text(result)
//     });
// });

//Alternative code


let form = document.getElementById("add")

function addition() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let number1 = parseInt($("#add1").val());
        let number2 = parseInt($("#add2").val());
        let result = number1 + number2;
        $("#output").text(result)

    })

}


function subtraction() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let number1 = parseInt($("#add1").val());
        let number2 = parseInt($("#add2").val());
        let result = number1 - number2;
        $("#output").text(result)

    })

}


function multiply() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let number1 = parseInt($("#add1").val());
        let number2 = parseInt($("#add2").val());
        let result = number1 * number2;
        $("#output").text(result)

    })

}


function division() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let number1 = parseInt($("#add1").val());
        let number2 = parseInt($("#add2").val());
        let result = number1 / number2;
        $("#output").text(result)

    })

}