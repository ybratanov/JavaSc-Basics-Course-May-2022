function timeMinutes(input) {
    let timeA = Number(input[0]);
    let timeB = Number(input[1]);
    let timeC = Number(input[2]);

    let sumInSec = timeA + timeB + timeC;
    let timeInMin = Math.floor (sumInSec / 60);
    let timeInSec = sumInSec % 60;

    if (timeInSec < 10){
        console.log(`${timeInMin}:0${timeInSec}`);
    } else {
        console.log(`${timeInMin}:${timeInSec}`);
    }
    
}
timeMinutes(["35","45","44"]);
timeMinutes(["22", "7", "34"]);
timeMinutes(["50","50","49"]);