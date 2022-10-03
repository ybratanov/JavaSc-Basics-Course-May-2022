function tradeCommissions(input) {
    let city = input[0];
    let sum = Number(input[1]);

    let comissions = 0;

    if (sum >= 0 && sum <= 500) {
        switch (city) {
            case 'Sofia':
                comissions = sum * 0.05;
                break;
            case 'Varna':
                comissions = sum * 0.045;
                break;
            case 'Plovdiv':
                comissions = sum * 0.055;
                break;
            default:
                console.log('error');
                break;
        }
    } else if (sum > 500 && sum <= 1000) {
        switch (city) {
            case 'Sofia':
                comissions = sum * 0.07;
                break;
            case 'Varna':
                comissions = sum * 0.075;
                break;
            case 'Plovdiv':
                comissions = sum * 0.08;
                break;
            default:
                console.log('error');
                break;
        }
    } else if (sum > 1000 && sum <= 10000) {
        switch (city) {
            case 'Sofia':
                comissions = sum * 0.08;
                break;
            case 'Varna':
                comissions = sum * 0.10;
                break;
            case 'Plovdiv':
                comissions = sum * 0.12;
                break;
            default:
                console.log('error');
                break;
        }
    } else if (sum > 10000) {
        switch (city) {
            case 'Sofia':
                comissions = sum * 0.12;
                break;
            case 'Varna':
                comissions = sum * 0.13;
                break;
            case 'Plovdiv':
                comissions = sum * 0.145;
                break;
            default:
                console.log('error');
                break;
        }
    } else {
        console.log('error');
    }
    if(comissions !== 0){
    console.log(comissions.toFixed(2));
    }
}
tradeCommissions(["Sofia",
"1500"]);
tradeCommissions(["Plovdiv",
"499.99"]);
tradeCommissions(["Varna",
"3874.50"]);
tradeCommissions(["Kaspichan",
"-50"]);

