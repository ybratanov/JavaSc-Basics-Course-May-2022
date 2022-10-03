function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let tremDeposit = Number(input[1]);
    let annalInterestRate = Number(input[2]);

    let yearInterestRate = depositAmount * (annalInterestRate / 100);
    let monthInterestRate = yearInterestRate / 12;
    let interestRateEndPeriod = monthInterestRate * tremDeposit;
    let sum = interestRateEndPeriod + depositAmount;

    console.log(sum);
}

depositCalculator([
    "200 ",
    "3 ",
    "5.7 "]
);