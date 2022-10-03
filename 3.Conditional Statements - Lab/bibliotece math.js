function main() {

    let number = 1.9999;

    console.log(Math.ceil(number))

}

//main();

//Math.ceil ногоре
//Math.floor надол
//Math.trunc закръгля до десетична запетая същото като флоор
//toFixed() до кой знак искаме да изрязваме

function main() {

    let num = 5;

    if (num < 10) {
        let secundNumber = 10
        console.log(num + secundNumber);
    }

}

main();

//consol.log трябва да е вътре в къдравите скоби , защото живота на променливата
// е само вътре, ако е отвън ще гръмне let живее само в скобите

function main() {

    let num = 5;

    if (num < 10) {
        console.log('<10');
    } else if (num < 15) {
        conslole.log('<15');
    } else {
        console.log('>=15');
    }

}

main();
// тк може да тестваме дебъгинга с брейк пойнт