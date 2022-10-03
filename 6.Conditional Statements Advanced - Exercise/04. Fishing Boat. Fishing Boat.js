function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countFishman = Number(input[2])

    let bootPrice = 0;
    //"Spring", "Summer", "Autumn", "Winter"
    switch (season) {
        case 'Spring':
            bootPrice = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            bootPrice = 4200;
            break;
        case 'Winter':
            bootPrice = 2600;
            break;
    }

    if (countFishman <= 6) {
        bootPrice = bootPrice * 0.90;
    } else if (countFishman >= 7 && countFishman <= 11) {
        bootPrice = bootPrice * 0.85;
    } else {
        bootPrice = bootPrice * 0.75;
    }

    if (countFishman % 2 === 0 && season !== "Autumn") {
        bootPrice = bootPrice * 0.95;
    }


    let diff = Math.abs(budget - bootPrice)
    if (budget >= bootPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);

