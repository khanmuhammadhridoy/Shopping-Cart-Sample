// phoneAdd button event handler
document.getElementById('phoneAddBtn').addEventListener('click', function () {
    handlePrice(true, 'phone');
})
// phoneMinus button event handler
document.getElementById('phoneMinusBtn').addEventListener("click", function () {
    handlePrice(false, 'phone');
})
// caseAdd button event handler
document.getElementById('caseAddBtn').addEventListener('click', function () {
    handlePrice(true, 'case');
})
// caseMinus button event handler
document.getElementById('caseMinusBtn').addEventListener('click', function () {
    handlePrice(false, 'case');
})
// plus minus button handler
function handlePrice(isIncrease, product) {
    let productQuantity = document.getElementById(product).value;
    let productQuantityNumber = parseInt(productQuantity);
    if (isIncrease == false & productQuantityNumber > 0) {
        productQuantityNumber--;
    } else {
        productQuantityNumber++;
    }
    document.getElementById(product).value = productQuantityNumber;
    let productPrice = document.getElementById(product + 'Price').innerText;
    let productPriceNumber = parseInt(productPrice);
    if (product == 'phone') {
        productPriceNumber = productQuantityNumber * 1219;
    }
    if (product == 'case') {
        productPriceNumber = productQuantityNumber * 59;
    }
    document.getElementById(product + 'Price').innerText = productPriceNumber;
    calculateTotal()
}
// cost calculation
function calculateTotal() {
    let phoneCount = getInputValue('phone');
    let caseCount = getInputValue('case');
    let totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total').innerText = totalPrice;
    let vat = Math.round(totalPrice * 0.1);
    document.getElementById('vat').innerText = vat;
    let grandTotal = vat + totalPrice;
    document.getElementById('grandTotal').innerText = grandTotal;
}
// converting string value to number
function getInputValue(id) {
    let value = document.getElementById(id).value;
    let number = parseInt(value);
    return number;
}