function petShop(input){
    let dogfood = Number(input[0]);
    let catfood = Number(input[1]);
    let total = ((dogfood * 2.50) + (catfood * 4));
    console.log(`${total} lv.`);

}

petShop(["5 ","4 "]);

//Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета и котки. 
// Храната се пазарува от
// зоомагазин, като една опаковка храна за кучета е на цена 2.50 лв, а опаковка храна за котки струва 4 лв.