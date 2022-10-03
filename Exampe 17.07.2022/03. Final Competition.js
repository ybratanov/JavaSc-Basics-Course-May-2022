function finalCompetition(input) {
    let countDancers = Number(input[0]);
    let countPoints = Number(input[1]);
    let seson = input[2];
    let destinacion = input[3];

    let price = 0;
    let cost = 0;
    let totaPrice = 0;

    if (seson == 'summer') {
        if (destinacion == 'Bulgaria') {
            price = countPoints * countDancers;
            cost = price * 0.05;
            totaPrice = price - cost
        } else if (destinacion == 'Abroad') {
            price = countPoints * countDancers;
            let bonus = price * 0.50;
            totaPrice = bonus + price;
            cost = totaPrice * 0.10;
            totaPrice -= cost;
        }
    } else if (seson == 'winter') {
        if (destinacion == 'Bulgaria') {
            price = countPoints * countDancers;
            cost = price * 0.08;
            totaPrice = price - cost
        } else if (destinacion == 'Abroad') {
            price = countPoints * countDancers;
            let bonus = price * 0.50;
            totaPrice = bonus + price;
            cost = totaPrice * 0.15;
            totaPrice -= cost;
        }
    }
    let charity = totaPrice * 0.75;
    let moneyFotDancers = (totaPrice - charity) / countDancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyFotDancers.toFixed(2)}`);
}
finalCompetition(["1",
    "89.5",
    "summer",
    "Abroad"])
