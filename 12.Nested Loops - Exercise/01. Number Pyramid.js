function sumPrimeNonPrime(input) {
    let n = Number(input[0]);
    let printNum = 1;
    let isFinish = false;

    for (let y = 1; y <= n; y++) {
        let buff = "";
        for (let x = 0; x < y; x++) {
            buff += printNum + " ";
            printNum++;
            if (printNum > n) {
                isFinish = true;
                break;

            }
        }
        console.log(buff);
        if (isFinish) {
            break;
        }
    }

}
sumPrimeNonPrime(["15"])