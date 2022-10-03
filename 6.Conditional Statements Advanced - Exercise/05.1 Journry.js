function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let sum = 0;

    if (budget <= 100) {
        if (season === "summer") {
            sum = budget * 0.30;
        } else if (season === "winter") {
            sum = budget * 0.70;
        }
        destination = "Bulgaria";
    } else if (budget <= 1000) {
        if (season === "summer") {
            sum = budget * 0.4;
        } else if (season === "winter") {
            sum = budget * 0.8;
        }
        destination = "Balkans";
    } else if (budget > 1000) {
        sum = budget * 0.9;
        destination = "Europe"
    }
    console.log(`Somewhere in ${destination}`);

    if (destination === 'Europe') {
        type = 'Hotel';
    } else if (season === 'summer') {
        type = "Camp";
    } else if (season === 'winter') {
        type = 'Hotel';
    }
    console.log(`${type} - ${sum.toFixed(2)}`) /// тук подредпада е по=добра и с последната проверка коригирах проблема за мястото
}

journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])