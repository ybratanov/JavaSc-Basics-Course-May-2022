function hotel(input) {
    let month = input[0];
    let overnights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
    let studioTotal = 0;
    let apartmentTotal = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartmentPrice = 65;
            if (overnights > 7 && overnights <= 14) {
                studioPrice = studioPrice - studioPrice * 0.05;
                studioTotal = studioPrice * overnights;
                apartmentTotal = apartmentPrice * overnights;
            } else if (overnights > 14) {
                studioPrice = studioPrice - studioPrice * 0.3;
                apartmentPrice = apartmentPrice - apartmentPrice * 0.1;
                studioTotal = studioPrice * overnights;
                apartmentTotal = apartmentPrice * overnights;
            }
            console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
            console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);


            break;

        case 'June':
        case 'September':
            studioPrice = 75.2;
            apartmentPrice = 68.7;
            if (overnights > 14) {
                studioPrice = studioPrice - studioPrice * 0.2;
                apartmentPrice = apartmentPrice - apartmentPrice * 0.1;
                studioTotal = studioPrice * overnights;
                apartmentTotal = apartmentPrice * overnights;
            } else {
                studioTotal = studioPrice * overnights;
                apartmentTotal = apartmentPrice * overnights;
            }
            console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
            console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            break;

        case 'July':
        case 'August':
            studioPrice = 76;
            apartmentPrice = 77;
            if (overnights > 14) {
                apartmentPrice = apartmentPrice - apartmentPrice * 0.1;
                studioTotal = studioPrice * overnights;
                apartmentTotal = apartmentPrice * overnights;
            } else {
                studioTotal = studioPrice * overnights;
                apartmentTotal = apartmentPrice * overnights;
            }
            console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
            console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
            break;

    }

}
hotel(["August", "20"])