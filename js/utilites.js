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
 

let totalSum = 0;
function setTheFinalTotalAmount(cardItemPrice) {
   
    totalSum += cardItemPrice;
    return totalSum;

}

function getDiscountCouponInputValue(discountCouponId, discountBtnId) {
    console.log(discountCouponId, discountBtnId)

    const coupon = document.getElementById(discountCouponId)
    const couponDisCountString = coupon.value;
    //const couponDisCountNumber = parseInt(couponDisCountString)
    
    console.log(typeof coupon.value)

    if( couponDisCountString  == 'SELL200'){
        const button = document.getElementById(discountBtnId);
        button.disabled = false;
 
    }

    // return  couponDisCountString;
}



//final calculation :
function finalCalculationAmount (totalPrice,setAllItemPriceSum,discount, afterDiscountPrice ){
      //target total calculation
      const targetTotalPriceId = document.getElementById(totalPrice)
      targetTotalPriceId.innerText = setAllItemPriceSum;
      const setAllItemPriceSumNumber = parseFloat(setAllItemPriceSum)
  
      //calculate discount amount
      const twentyPersentDiscount = setAllItemPriceSumNumber * 20 / 100
      const targetDiscountPriceId = document.getElementById(discount)
      targetDiscountPriceId.innerText =twentyPersentDiscount;
      const twentyPersentDiscountNumber = parseFloat(twentyPersentDiscount)
  
  
      //final total calculation :
      const finalCalculation = setAllItemPriceSumNumber - twentyPersentDiscountNumber;
  
      //setFinal amount :
      const targetAfterDiscountPrice = document.getElementById(afterDiscountPrice)
      targetAfterDiscountPrice.innerText = finalCalculation;
}

