function newHouse(input) {
    let type = input[0]
    let count = Number(input[1])
    let budget = Number(input[2])

    let sum = 0
    switch (type) {
        case 'Roses':
            sum = count * 5;
            if (count > 80) {
                sum = sum * 0.90;
            }
            break;
        case 'Dahlias':
            sum = count * 3.80;
            if (count > 90) {
                sum = sum * 0.85;
            }
            break;
        case 'Tulips':
            sum = count * 2.80;
            if (count > 80) {
                sum = sum * 0.85;
            }
            break;
        case 'Narcissus':
            sum = count * 3;
            if (count < 120) {
                sum = sum * 1.15;
            }
            break;
        case 'Gladiolus':
            sum = count * 2.50;
            if (count < 80) {
                sum = sum * 1.20;
            }
            break;
    }

    let diff = Math.abs(budget - sum);
    if (sum <= budget) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }

}
newHouse(["Roses", "55", "250"])
newHouse(["Tulips","88","260"])
