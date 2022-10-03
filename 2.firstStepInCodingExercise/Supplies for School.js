function suppliesForSchool(input) {

    let countPens = Number(input[0]);
    let countMarkers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);

    let pricePens = countPens * 5.80;
    let priceMarkers = countMarkers * 7.20;
    let priceForDetergent = liters * 1.20;

    let money = pricePens + priceMarkers + priceForDetergent;
    //console.log(money)
    let totalPrice = money - (money * (discount / 100));

    console.log(totalPrice);
}

suppliesForSchool(
    ["2 ", "3 ", "4 ","25 "])