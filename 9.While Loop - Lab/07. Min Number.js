function minNumber(input){
    let inputElement = input[0];
    let index = 1;
    let maxNumber = Number.MAX_SAFE_INTEGER;

    while (inputElement !== 'Stop') {

        let currentNum = Number(inputElement);

        if (currentNum < maxNumber) {
            maxNumber = currentNum;
        }
        inputElement = input[index]
        index++

    }

    console.log(maxNumber);


}

minNumber(["100",
"99",
"80",
"70",
"Stop"])