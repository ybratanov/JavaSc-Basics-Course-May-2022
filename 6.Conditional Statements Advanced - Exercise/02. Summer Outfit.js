function outFits(input) {
    let degreeds = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = 0;
    let shoes = 0;

    if (degreeds >= 10 && degreeds <= 18) {
        if (timeOfDay === 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (timeOfDay === 'Afternoon' || timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (degreeds > 18 && degreeds <= 25) {
        if (timeOfDay === 'Morning') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (timeOfDay === 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (degreeds >= 25) {
        if (timeOfDay === 'Morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (timeOfDay === 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if (timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }



    }

    console.log(`It's ${degreeds} degrees, get your ${outfit} and ${shoes}.`);

}
outFits(["16",
    "Morning"])
outFits(["22",
    "Afternoon"])
outFits(["28",
    "Evening"])
