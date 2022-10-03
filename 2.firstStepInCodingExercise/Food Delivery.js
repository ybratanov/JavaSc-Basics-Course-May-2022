function foodDelivery(input) {
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let priceMenu = (chikenMenu * 10.35) + (fishMenu * 12.40) + (veganMenu * 8.15);
    let discount = (priceMenu * 20) / 100
    let totalPrice = priceMenu + discount + 2.50

    console.log(totalPrice);
}
foodDelivery(["2 ", "4 ", "3 "]);