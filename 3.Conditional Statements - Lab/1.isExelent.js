function greaterNumber(input){
    let great = Number(input[0]);
    
    if (great >= 5.50){
        console.log("Excellent!");
    }

}

greaterNumber(["6"])
greaterNumber(["5"])
greaterNumber(["5.50"])
greaterNumber(["5.49"])