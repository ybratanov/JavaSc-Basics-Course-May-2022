function repainting(input) {

    let nylonQuantity = Number(input[0]);
    let painQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let workHours = Number(input[3]);

    let totalNylonQuantity = ((nylonQuantity + 2) * 1.50);
    let totalPainQuantity = (((painQuantity * 10) / 100) + painQuantity) * 14.50;
    let totalThinnerQuantity = (thinnerQuantity * 5.00);

    let totalPriceMaterials = totalNylonQuantity + totalPainQuantity + totalThinnerQuantity + 0.40;
    let totalPriceToWork = (totalPriceMaterials * 0.30) * workHours;
    let sum = totalPriceMaterials + totalPriceToWork;
    console.log(sum);

}
repainting(["10", "11", "4", "8"]);