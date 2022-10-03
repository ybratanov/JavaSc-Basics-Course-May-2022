function coins(input) {
    let moneyInLv = Number(input[0])
    // Важно! за задачите е че при изчисления от този вид е хубааво да се работи с една мерна единица
    //Както в тоси случей обърнахме левовете към стотинки , защото вс. процесори дават бъг зарди дробните числа!
    let money = Math.floor(moneyInLv * 100) // <=====
    let coinsCounter = 0;
    while (money > 0) {
        coinsCounter++;
        if (money >= 200) {
            money -= 200
        } else if (money >= 100) {
            money -= 100;
        } else if (money >= 50) {
            money -= 50;
        } else if (money >= 20) {
            money -= 20;
        } else if (money >= 10) {
            money -= 10;

        } else if (money >= 5) {
            money -= 5;

        } else if (money >= 2) {
            money -= 2;

        } else {
            money -= 1;
        }
    }

    console.log(coinsCounter);
}
coins(["1.23"])
coins(["2"])
coins(["0.56"])