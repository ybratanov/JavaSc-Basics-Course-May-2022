function invalidNumber(input){
    let num = Number(input)

    if (num >= 100 && num <= 200){

    }else if(num === 0){
        
    }else{
        console.log('invalid');
    }

}
invalidNumber(["75"]);
invalidNumber(["-1"]);
invalidNumber(["150"]);
invalidNumber(["100"]);
invalidNumber(["200"]);
invalidNumber(["220"]);