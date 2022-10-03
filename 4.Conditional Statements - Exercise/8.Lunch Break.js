function lunchBreak(input) {
    let nameOfSerials = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let freeTime = breakTime - restTime - lunchTime;
    let dif = Math.abs(freeTime - episodeTime);

    if (freeTime >= episodeTime) {
        
        console.log(`You have enough time to watch ${nameOfSerials} and left with ${Math.ceil(dif)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfSerials}, you need ${Math.ceil(dif)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"])
lunchBreak(["Teen Wolf", "48", "60"])
