function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    index++;

    let sumPrimeNum = 0
    let sumNonPrimeNum = 0
    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            sumPrimeNum += 1;
            command = input[index]
            index++;
            continue;
        }

        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                sumNonPrimeNum += num;
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimeNum += num
        }
        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"])