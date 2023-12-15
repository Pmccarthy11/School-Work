"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});

function calculateTax(income) {
    const taxRate = 0.10;
    const taxAmount = income * taxRate;
    return taxAmount;
}

function displayError(message) {
    alert(message);
}

function processEntry() {
    const incomeInput = document.getElementById("income");
    const incomeValue = parseFloat(incomeInput.value);

    if (isNaN(incomeValue) || incomeValue <= 0) {
        displayError("Please enter a valid number greater than zero.");
    } else {
        const taxAmount = calculateTax(incomeValue);
        const taxInput = document.getElementById("tax");
        taxInput.value = taxAmount.toFixed(2); s

        incomeInput.focus();
    }
}

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", processEntry);
