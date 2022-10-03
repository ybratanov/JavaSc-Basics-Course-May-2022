function excursion(input) {
    let peopleGrup = Number(input[0]);
    let countNigths = Number(input[1]);
    let countTrancportCards = Number(input[2]);
    let countTickedMuseom = Number(input[3]);

    let priceNights = countNigths * 20;
    let priceTransportCards = countTrancportCards * 1.60;
    let priceTickedMuseom = countTickedMuseom * 6;
    let totalPriceForOnePerson = priceNights + priceTransportCards + priceTickedMuseom
    let totalforGrups = totalPriceForOnePerson * peopleGrup
    let totalSum = totalforGrups * 1.25;

    console.log(totalSum.toFixed(2));
}
excursion(["20",
    "14",
    "30",
    "6"])