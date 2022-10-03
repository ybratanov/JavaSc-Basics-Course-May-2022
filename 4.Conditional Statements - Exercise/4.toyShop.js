function toyShop(input) {

    let price = Number(input[0]);
    let puzzekCounT = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trukCount = Number(input[5]);

    let money = puzzekCounT * 2.60 + talkingDoll * 3 + bearCount * 4.10 + minionsCount * 8.2 + trukCount * 2;
    let toyCount = puzzekCounT + talkingDoll + bearCount + minionsCount + trukCount;

    if (toyCount >= 50) {
        money = money * 0.75; //25% заотстъпка
    }
    money = money * 0.90; // 10% за намема

    let diff = Math.abs(price - money)
    // ако има 100лв и цената на екскурзията е 100 трябва да добавим знак за (=)
    // защото ако има 100 - 100 само с (>) този знак
    // избива грешка

    if (money >= price) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}
toyShop(["40.8","20","25","30","50","10"])

// по условие на задачата имаме toFixed(2)
//също така от матбиблиотеката Math.abs това вади
// абсолютна стойност в цяло число 