function deerOfSanta(input) {

    let dayWhitoutSanta = Number(input[0]);
    let foodInKg = Number(input[1]);
    let furstDeer = Number(input[2]);
    let secundDeer = Number(input[3]);
    let turthDeer = Number(input[4]);


    let needFood = (dayWhitoutSanta * furstDeer) + (dayWhitoutSanta * secundDeer) + (dayWhitoutSanta * turthDeer);
    let leftFood = Math.abs(foodInKg - needFood)
    let neededFood = Math.abs(needFood - foodInKg)

    if (foodInKg > needFood) {

        console.log(`${Math.floor(leftFood)} kilos of food left.`);
    } else if (foodInKg < needFood) {

        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
    }

}
deerOfSanta(["2",
    "10",
    "1",
    "1",
    "2"])
console.log("-----------");
deerOfSanta(["5",
    "10",
    "2.1",
    "0.8",
    "11"])