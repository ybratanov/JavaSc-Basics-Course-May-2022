function workingHours(input) {
    let day = input[1];
    let workingHours = Number(input[0])

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
            if (workingHours >= 10 && workingHours <= 18) {
                console.log('open');
            } else {
                console.log('closed');
            }
            break;

        default:
            console.log('closed');
            break;



    }

}
workingHours(["11",
    "Monday"])
workingHours(["19",
    "Friday"])
workingHours(["11",
    "Sunday"])
