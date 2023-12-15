const $ = selector => document.querySelector(selector);

function processEntry() {
    var userInput = document.getElementById('cents').value;

    if (isValidNumber(userInput)) {
        makeChange(userInput);
    } else {
        alert('Please enter a valid number between 0 and 99.');
    }
}


function isValidNumber(input) {
    var number = parseFloat(input);
    return !isNaN(number) && number >= 0 && number <= 99;
}


function makeChange(userInput) {

    var cents = parseInt(userInput);

    var quarters = Math.floor(cents / 25);
    var remainingCentsAfterQuarters = cents % 25;

    var dimes = Math.floor(remainingCentsAfterQuarters / 10);
    var remainingCentsAfterDimes = remainingCentsAfterQuarters % 10;

    var nickels = Math.floor(remainingCentsAfterDimes / 5);
    var pennies = remainingCentsAfterDimes % 5;

    document.getElementById('quarters').value = quarters;
    document.getElementById('dimes').value = dimes;
    document.getElementById('nickels').value = nickels;
    document.getElementById('pennies').value = pennies;
}

document.getElementById('calculate').addEventListener('click', processEntry);
