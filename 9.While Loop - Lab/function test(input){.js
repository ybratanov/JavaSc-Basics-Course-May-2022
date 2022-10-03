function test(){

    //for (let i= 1; i <= 5 ; i++){
    //    console.log(i);
    //}
    
    let num = 1;
    while(num <=5){
     //   console.log(num);
        num++;
    }
   // console.log(`Num: ${num}`);
}
test()


function test2(){

let num =1
while(true){
//    console.log(num);

    if (num === 5){
        break;
    }
    num++; // идва от проверката в ифа инкрементацията
}

}
test2()

function test3(){

    let num =1
    while(true){
        console.log(num);
    
        if (num === 5){
            continue; // трябва да се внимава с команда продължи за да не стане безкраен цикъл от 5-те
        }
        num++; // идва от проверката в ифа инкрементацията
    }
    
    }
    test3()
