function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;

    let currentMoney = Number(input[index]);
    index++;

    let spendCounter = 0
    let dayCounter = 0
    let isSaveTheMoney = true;
    while (currentMoney < needMoney) {
        let action = input[index];
        index++;
        let amout = Number(input[index]);
        index++;
        dayCounter++;

        switch (action) {

            case 'spend':
                currentMoney -= amout;
                spendCounter++;
                if (currentMoney < 0) {
                    currentMoney = 0
                }
                break;
            case 'save':
                currentMoney += amout
                spendCounter = 0;
                break;
        }

        
        if (spendCounter === 5) {
            isSaveTheMoney = false
            break;
        }

    }

    if (!isSaveTheMoney) {
        console.log("You can't save the money.");
        console.log(dayCounter);
    } else {
        console.log(`You saved the money for ${dayCounter} days.`);

    }
}


vacation(["2000",

    "1000",

    "spend",

    "1200",

    "save",

    "2000"])