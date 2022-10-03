function main() {

    let number = 15
    if (number < 10) {
        console.log('Number is <10');
    }
    if (number === 15) {
        console.log('Number is 15');
    }
    if (number >= 15) {
        console.log('Number is >=15');

    }
}
main()

function main() {

    let number = 5
    if (number < 10) {
        console.log('Number is <10');
    }
    else if (number < 15) {
        console.log('Number is 15');
    }
    else if (number > 25) {
        console.log('Number is >=25');

    }
}
main()
// if прави проверки , но когато е if else прави проверка и в момента които 
// не изпълни искането и не прави следващи проверки


function main() {

    let firstWort = 'Hi';
    let secundWort = 'Hello';

    let result = firstWort.length > secundWort.length
    console.log(result);
}
main()

//не сравняваме стринг а дължината на символите

function main() {
    let input = '123$'
    let reslt = parseInt(input)

    console.log(result);
}
main()

//parseInt само число от стринг
//parseFloat числото и останалите си,воли след числото