function everest(input) {
    let index = 0
    let startHeight = 5364;
    let target = 8848;
    let curentHeight = 0;
    let count = 1;
    while (true) {
        let yesOrNo = input[index];
        index++
        if (yesOrNo === "END") {
            break;
        }
        if (yesOrNo === "Yes") {
            count++;
        } 

        let height = Number(input[index]);
        curentHeight += height;
        index++;

        if (curentHeight + startHeight >= target) {
            break;
        }
        if (count === 5) {
            break;
        }
    }
    if (startHeight + curentHeight < target) {
        console.log("Failed!");
        console.log(startHeight + curentHeight);
    } else {
        console.log(`Goal reached for ${count} days!`);
    }

}
everest(["Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"])

everest(["Yes",
    "1000",
    "Yes",
    "945",
    "No",
    "1200",
    "END"])