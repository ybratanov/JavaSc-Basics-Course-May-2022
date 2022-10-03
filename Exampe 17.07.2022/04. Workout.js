function workout(input) {
    let index = 0
    let days =Number(input[index]); 
    index++;// 5
    let dayOnekm = Number(input[index]);//30
    index++
 
 
    let allKm = 0;
 
        for (let i = 1; i < days; i++) {
 
            let k = Number(input[days])
            dayOnekm = dayOnekm + dayOnekm * k / 100;
            allKm += dayOnekm;
            index++
 
 
        }
        let diff = Math.ceil(1000 - allKm);
        if (allKm >= 1000){
            console.log(`You've done a great job running ${diff} more kilometers!`);
        }else if (allKm < 1000){
            console.log(`Sorry Mrs. Ivanova, you need to run ${Math.abs(diff)} more kilometers`);
        }
    }

workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])
console.log('----------');
workout(["4",
    "100",
    "30",
    "50",
    "60",
    "80"])
