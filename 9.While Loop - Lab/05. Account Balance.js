function accountBalance(input) {
    let totalSum = 0;
    for (let index = 0; index < input.length; index++) {

        let crrentInput = input[index];

        if (crrentInput === 'NoMoreMoney') {
            break;

        }
        let inptAsNumber = Number(crrentInput);

        if (inptAsNumber < 0) {
            console.log('Invalid operation!');
            break;
        }

        totalSum += inptAsNumber;
        console.log(`Increase: ${inptAsNumber.toFixed(2)}`);

    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
