var totalPrice;
function calculatePrice() {
    var ageInput = parseInt(document.getElementById('age').value);


    
    // Pricing logic based on age
    if (ageInput >= 0 && ageInput <= 3) {
      totalPrice =  0; // Free for ages 0-3
    } else if (ageInput >= 4 && ageInput <= 12) {
      totalPrice = 100; // R100 each for ages 4-12
    } else if (ageInput >= 13 && ageInput <= 18) {
      totalPrice = 150; // R150 each for ages 13-18
    } else if (ageInput >= 19 && ageInput <= 60) {
      totalPrice =  200; // R200 each for ages 19-60
    } else {
      totalPrice = 0; // Free for senior citizens (age > 60)
    }
  
    document.getElementById("price").innerHTML = "Total Price: R" + totalPrice.toFixed(2);
    document.getElementById('khanyi').style.display = 'block';
}

function purchasePrice() {
;
    var quantityInput = parseInt(document.getElementById('quantity').value);
    var total = totalPrice * quantityInput;
    document.getElementById('itq').innerHTML = 'Total Ticket Price is: R' + total;
}