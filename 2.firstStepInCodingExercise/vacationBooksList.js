function vacationBooksList(input) {

    let pageCount = Number(input[0]);
    let readPageForOneHour = Number(input[1]);
    let dayCount = Number(input[2]);

    let totalTimeForReadBook = pageCount / readPageForOneHour;
    let needTimeForDey = totalTimeForReadBook / dayCount;
    console.log(needTimeForDey);

}

vacationBooksList(["212 ","20 ","2 "]);