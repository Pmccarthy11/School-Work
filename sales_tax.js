"use strict";

const $ = selector => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", function() {
  
  var subtotalInput = document.getElementById("subtotal");
  var taxRateInput = document.getElementById("tax_rate");
  var salesTaxInput = document.getElementById("sales_tax");
  var totalInput = document.getElementById("total");
  var calculateButton = document.getElementById("calculate");
  var clearButton = document.getElementById("clear");

  
  calculateButton.addEventListener("click", processEntries);

 
  clearButton.addEventListener("click", clearEntries);

  
  function processEntries() {
      
      var subtotal = parseFloat(subtotalInput.value) || 0; 
      var taxRate = parseFloat(taxRateInput.value) || 0;

      
      var salesTax = (subtotal * taxRate) / 100;
      var total = subtotal + salesTax;

    
      salesTaxInput.value = salesTax.toFixed(2); 
      totalInput.value = total.toFixed(2);
  }

  
  function clearEntries() {
      subtotalInput.value = "";
      taxRateInput.value = "";
      salesTaxInput.value = "";
      totalInput.value = "";
  }
});
