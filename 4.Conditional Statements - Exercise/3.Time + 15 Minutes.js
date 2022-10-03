function timeMinutes(input) {

    let hours = Number(input[0]);
    let min = Number(input[1]);

    let timeInMin = hours * 60 + min;
    timeInMin = timeInMin + 15;

    let h = Math.floor(timeInMin / 60);
    let m = timeInMin % 60;
    if (h === 24) {
        h = 0;
    }

    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }
}
timeMinutes(["1", "46"]);

// идеята е да преобразуваме всичко във минути 
//за да може да опериеаме и да добавим + 15
// след което правя нови променливи  за да върна H
// и правим проверка с if и else