function examPreparation(input) {

    let index = 0;

    let negativGradeCount = Number(input[index])
    index++;

    let command = input[index];
    index++;

    let negativGradeCounter = 0;
    let sumOfGrade = 0;
    let countProblems = 0;
    let taskName = "";
    let isNeedBreak = false
    while (command !== 'Enough') {
        taskName = command;
        let temGrade = Number(input[index]);
        index++;
        countProblems++;
        sumOfGrade += temGrade;

        if (temGrade <= 4) {
            negativGradeCounter++;
            if (negativGradeCounter === negativGradeCount) {
                isNeedBreak == true
                break;
            }
        }

        command = input[index];
        index++;
    }

    let avg = sumOfGrade / countProblems;
    if (command !== "Enough") {
        console.log(`You need a break, ${negativGradeCount} poor grades.`);
    } else {

        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${taskName}`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])

