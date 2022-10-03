function basketballEquipment(input) {

    let yearsPrice = Number(input[0]);

    let shosePrice = yearsPrice - ((yearsPrice * 40) / 100);
    let sportOutfit = shosePrice - ((shosePrice * 20) / 100);
    let basketBall = (sportOutfit * 25) / 100;
    let acssesoars = (basketBall * 20) / 100;

    let totalPriceForOutfit = yearsPrice + sportOutfit + basketBall + shosePrice + acssesoars;
    console.log(totalPriceForOutfit);

}

basketballEquipment(["365 "]);