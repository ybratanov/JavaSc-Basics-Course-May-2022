function multiplicationTable() {
// let isFinish = 0;
    for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
            let result = y * x;
            console.log(`${x} * ${y} = ${result}`);
            // if ( y === 5){
                //isFinish = true
              //  break;
          //  }
        }
        //if (finish){
        //break;
        //} ако искаме да спрем някъде цикъла
    }
}

multiplicationTable();