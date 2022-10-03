function sumNumbers(input) {

    let targetNumber = Number(input[0]);//100
    let sumOfNumber = 0;
    let index = 1;
    let currentNumber = input[index];

    while (sumOfNumber < targetNumber) {
        sumOfNumber = sumOfNumber + Number(currentNumber)
        index++;
        currentNumber = input[index]
    }
    console.log(sumOfNumber);
}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"])
