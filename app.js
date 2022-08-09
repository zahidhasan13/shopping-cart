const updateCount = (product, price, isIncreasing) => {
    const quantity = document.querySelector("#" + product +"-quantity");
    let counter = parseInt(quantity.value);
    if(isIncreasing){
        counter = counter + 1;
    }else if(counter>0){
        counter = counter - 1;
    }
    quantity.value = counter
    const phonePrice = document.querySelector("#" + product +"-price");
    phonePrice.innerText = counter * price;

    // Total
    calculateTotal();
}
// Total price Calculte
function getInputNumber(product){
    const NumberInput = document.querySelector("#"+product+"-quantity");
    const quantityInput = parseInt(NumberInput.value)
    return quantityInput;
}

function calculateTotal(){
    const phoneTotal = getInputNumber("phone")*1219;
    const caseTotal = getInputNumber("case")*59;
    const subTotal = phoneTotal + caseTotal;
    const tax = Math.floor((2/100)*subTotal);
    const toTalPrice = subTotal+tax;

    document.querySelector("#sub-total").innerText = subTotal;
    document.querySelector("#tax").innerText = tax;
    document.querySelector("#total").innerText = toTalPrice;
}
// Phone Increase Decrease
document.querySelector("#phone-decr").addEventListener("click", function(){
    updateCount("phone", 1219, false)
})
document.querySelector("#phone-incr").addEventListener("click", function(){
    updateCount("phone", 1219, true);
})

// Case Increase Decrease
document.querySelector("#case-decr").addEventListener("click", function(){
    updateCount("case", 59, false)
})
document.querySelector("#case-incr").addEventListener("click", function(){
    updateCount("case", 59, true);
})

