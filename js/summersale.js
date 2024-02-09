// kitchen accessories
document.getElementById('kitchenware-item-one').addEventListener('click', function () {

    const cardItemName = getCardNameById('KitchenAccessories')
    const cardItemPrice = getCardPriceById('KitchenAccessoriesPrice')

    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    setNameAndPrice(targetId, cardItemName, cardItemPrice)

    //sum all item price :
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)

    //set total price :
    const sumAllItemsPrice = setTotalPrice(setAllItemPriceSum)
})

//input value (apply button)
document.getElementById('discountCouponField').addEventListener('keyup', function (event) {

    const inputValue = event.target.value;
    getDiscountCouponInputValue(inputValue, 'discountBtnId')
})

document.getElementById('discountBtnId').addEventListener('click', function () {

    const cardItemPrice = getCardPriceById('KitchenAccessoriesPrice')
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)
    const setTotalSumAllItemsPrice = setTotalPrice(setAllItemPriceSum)

    const getTwentyPersentOffer = setTotalSumAllItemsPrice * 20 / 100;

    const targetDiscountId = document.getElementById('discount')
    targetDiscountId.innerText = getTwentyPersentOffer;
    const disCountNumber = parseFloat(getTwentyPersentOffer)

    const finalTotalNumber = setTotalSumAllItemsPrice - disCountNumber;

    const afterDiscountPriceId = document.getElementById('afterDiscountPrice')
    afterDiscountPriceId.innerText = finalTotalNumber

})

document.getElementById('kitchenware-item-two').addEventListener('click', function () {

    const cardItemName = getCardNameById('K-accessories')
    const cardItemPrice = getCardPriceById('K-accessoriesPrice')

    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    setNameAndPrice(targetId, cardItemName, cardItemPrice)

    //sum all item price :
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)

    //set total price :
    const sumAllItemsPrice = setTotalPrice(setAllItemPriceSum)



})

document.getElementById('kitchenware-item-three').addEventListener('click', function () {

    const cardItemName = getCardNameById('HomeCooker')
    const cardItemPrice = getCardPriceById('HomeCookerPrice')

    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    setNameAndPrice(targetId, cardItemName, cardItemPrice)

    //sum all item price :
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)

    //set total price :
     setTotalPrice(setAllItemPriceSum)
})

document.getElementById('sportsware-item-one').addEventListener('click', function () {

    const cardItemName = getCardNameById('softwareBack')
    const cardItemPrice = getCardPriceById('softwareBackPriceId')

    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    setNameAndPrice(targetId, cardItemName, cardItemPrice)

    //sum all item price :
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)
    // console.log(setAllItemPriceSum)

    //set total price :
     setTotalPrice(setAllItemPriceSum)
})

document.getElementById('sportsware-item-two').addEventListener('click', function () {

    const cardItemName = getCardNameById('fullJUrsySetId')
    const cardItemPrice = getCardPriceById('fullJUrsySetPriceId')

    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    setNameAndPrice(targetId, cardItemName, cardItemPrice)

    //sum all item price :
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)
    // console.log(setAllItemPriceSum)

    //set total price :
     setTotalPrice(setAllItemPriceSum)
})

document.getElementById('sportsware-item-three').addEventListener('click', function () {

    const cardItemName = getCardNameById('sportsTitleId')
    const cardItemPrice = getCardPriceById('sportsTitlePriceId')

    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    setNameAndPrice(targetId, cardItemName, cardItemPrice)

    //sum all item price :
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)
    // console.log(setAllItemPriceSum)

    //set total price :
     setTotalPrice(setAllItemPriceSum)
 
})

document.getElementById('furniture-items-one').addEventListener('click', function () {

    const cardItemName = getCardNameById('singleRelaxId')
    const cardItemPrice = getCardPriceById('singleRelaxPriceId')

    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    setNameAndPrice(targetId, cardItemName, cardItemPrice)

    //sum all item price :
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)
    // console.log(setAllItemPriceSum)

    //set total price :
     setTotalPrice(setAllItemPriceSum)
 
})

document.getElementById('furniture-item-two').addEventListener('click', function(){

    const cardItemName = getCardNameById('childrenPlayId')
    const cardItemPrice = getCardPriceById('childrenPlayPriceId')

    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    setNameAndPrice(targetId, cardItemName, cardItemPrice)

    //sum all item price :
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)
    // console.log(setAllItemPriceSum)

    //set total price :
     setTotalPrice(setAllItemPriceSum)
 
})
 
document.getElementById('furniture-item-three').addEventListener('click', function () {

    const cardItemName = getCardNameById('flexiableSofaId')
    const cardItemPrice = getCardPriceById('flexiableSofaPriceId')

    //get target id where i set item name and price(appendChild):
    const targetId = document.getElementById('displayProduct')
    setNameAndPrice(targetId, cardItemName, cardItemPrice)

    //sum all item price :
    const setAllItemPriceSum = sumAllItemsTotal(cardItemPrice)
   
    //set total price :
     setTotalPrice(setAllItemPriceSum)
 
})
