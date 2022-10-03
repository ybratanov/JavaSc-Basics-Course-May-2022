function worldSwimmingRecord(input) {
    let currenRecord = Number(input[0]);
    let distanceInM = Number(input[1]);
    let swimmingTimeForOneM = Number(input[2]);

    let time = distanceInM * swimmingTimeForOneM;
    let slowTime = Math.floor(distanceInM / 15); // колко пъте ще бъде забавен Иван заради съпротивлението
    time = time + (slowTime * 12.5);

    if (time < currenRecord) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        let diff = time - currenRecord;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }


}
worldSwimmingRecord(["10464",
    "1500",
    "20"])
worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"])

