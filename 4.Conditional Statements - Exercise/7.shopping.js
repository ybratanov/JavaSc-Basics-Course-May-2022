function shopping(input) {
    let buddget = Number(input[0]);
    let videoCardNum = Number(input[1]);
    let procesorsNum = Number(input[2]);
    let ramNum = Number(input[3]);

    let priceVideoCard = videoCardNum * 250;
    let priceProcesors = (priceVideoCard * 0.35) * procesorsNum;
    let priceRam = (priceVideoCard * 0.10) * ramNum;
    let priceForAllParts = priceVideoCard + priceProcesors + priceRam;

    if (videoCardNum > procesorsNum) {
        priceForAllParts = priceForAllParts * 0.85;
    } else {
        priceForAllParts = priceForAllParts
    }

    let diss = Math.abs(buddget - priceForAllParts).toFixed(2);

    if (priceForAllParts <= buddget) {
        console.log(`You have ${diss} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diss} leva more!`)
    }

}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);

//тук трябваше да внимавам с отстъпката от 15%  първия иф 
// когато изписвам името на променливата трябва да е само то "priceForAllParts"