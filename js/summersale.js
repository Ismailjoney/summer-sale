// kitchen accessories
document.getElementById('kitchenware-item-one').addEventListener('click', function () {

    const cardItemName = getCardNameById('KitchenAccessories')
    const cardItemPrice = getCardPriceById('KitchenAccessoriesPrice')


    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    const setNamePrice = setNameAndPrice(targetId, cardItemName, cardItemPrice)



    //sum all item price :
    const setAllItemPriceSum = setTheFinalTotalAmount(cardItemPrice)

    

    //final calc function :
    finalCalculationAmount('totalPrice', setAllItemPriceSum, 'discount', 'afterDiscountPrice')


    
     



})

//get input field value
const getDiscountInputValue =getDiscountCouponInputValue('discountCouponField', 'discountBtn')
console.log(getDiscountInputValue)








document.getElementById('kitchenware-item-two').addEventListener('click', function () {

    const cardItemName = getCardNameById('K-accessories')
    const cardItemPrice = getCardPriceById('K-accessoriesPrice')

    //get target id where i set item name and price:
    const targetId = document.getElementById('displayProduct')
    const setNamePrice = setNameAndPrice(targetId, cardItemName, cardItemPrice)

    const setCalculationTotal = setTheFinalTotalAmount(cardItemPrice)
    console.log(setCalculationTotal)



})

document.getElementById('kitchenware-item-three').addEventListener('click', function () {


    const cardItemName = getCardNameById('HomeCooker')
    const cardItemPrice = getCardPriceById('HomeCookerPrice')


    //get target id where i set item name and price:
    const targetId = document.getElementById('displayProduct')
    const setNamePrice = setNameAndPrice(targetId, cardItemName, cardItemPrice)




})

