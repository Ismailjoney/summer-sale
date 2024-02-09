//get all card Info(price and name) By id name:
function getCardNameById(itemNameId) {
    const nameId = document.getElementById(itemNameId)
    const itemName = nameId.innerText;
    return itemName;
}

function getCardPriceById(itemPriceId) {
    const priceId = document.getElementById(itemPriceId)
    const itemPriceString = priceId.innerText;
    const itemNamePrice = parseFloat(itemPriceString)

    return itemNamePrice;
}
 
//set name and price calculation side:
function setNameAndPrice(targetId, cardItemName, cardItemPrice) {

    let count = targetId.childElementCount;
    countUpdateValue = count + 1

    const p = document.createElement('p')
    p.innerHTML = `
    <p>${countUpdateValue}. ${cardItemName} : <span>${cardItemPrice}</span> tk <p/>

    `
    targetId.appendChild(p)
}

//sum all card items price
let totalSum = 0;
function sumAllItemsTotal(cardItemPrice) {
    totalSum += cardItemPrice;
    return totalSum;

}


//input value (APPLY BUTTON)
function getDiscountCouponInputValue(inputValue, discountBtnId) {
    
    const button = document.getElementById(discountBtnId);
    
    if (inputValue.toUpperCase() === 'SELL200'.toUpperCase()) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
 
}

//set total price innerText without discount
function setTotalPrice (setAllItemPriceSum){
    const totalPriceId = document.getElementById('totalPrice')
    totalPriceId.innerText = setAllItemPriceSum;
    const  sumTotalPriceAllItems = parseFloat(setAllItemPriceSum)
    
    return sumTotalPriceAllItems;
}












//final calculation :
// function finalCalculationAmount(totalPrice, setAllItemPriceSum) {
//     //target total calculation
//     const targetTotalPriceId = document.getElementById(totalPrice)
//     targetTotalPriceId.innerText = setAllItemPriceSum;
//     const setAllItemPriceSumNumber = parseFloat(setAllItemPriceSum)

//     return setAllItemPriceSumNumber;


// }


// function applyDiscount(setAllItemPriceSumNumber, getDiscountInputValue, discount, afterDiscountPrice, totalPrice, setAllItemPriceSum, discountCouponField) {
//     //calculate discount amount
   

//     if (getDiscountInputValue) {
//         const twentyPersentDiscount = setAllItemPriceSumNumber * 20 / 100;
//         const targetDiscountPriceId = document.getElementById(discount)
//         targetDiscountPriceId.innerText = twentyPersentDiscount;
//         const twentyPersentDiscountNumber = parseFloat(twentyPersentDiscount)


//         //final total calculation :
//         const finalCalculation = setAllItemPriceSumNumber - twentyPersentDiscountNumber;

//         //setFinal amount :
//         const targetAfterDiscountPrice = document.getElementById(afterDiscountPrice)
//         targetAfterDiscountPrice.innerText = finalCalculation;
//     }
//     else {
//         const targetTotalPriceId = document.getElementById(totalPrice)
//         targetTotalPriceId.innerText = setAllItemPriceSum;
//     }

// }

