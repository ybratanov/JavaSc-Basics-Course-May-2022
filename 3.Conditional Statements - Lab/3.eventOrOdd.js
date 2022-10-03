function main(input) {

    let firstNumber = Number(input[0]);

    if (firstNumber % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}
main(['10'])


function parse(input) {

    let firstNumber = Number (input[0]);
    let secundNumber = Number (input[1]);

    if(firstNumber > secundNumber){
        console.log(`Greater number: ${firstNumber}`);
    }else{
        console.log(`Greater number: ${secundNumber}`);
    }

    }
parse(['10','17']);

//когато пишем if() следват кръгли скоби и това което искаме
//когато е }else{ се загражда с къдрави след което се пише какво искаме да
// отпечатаме на конзолата