function godzillaVsKong(input) {
    let buddget = Number(input[0]);
    let statistsNum = Number(input[1]);
    let clothPrice = Number(input[2]);

    let decorCost = buddget * 0.1
    let clothCost = 0

    if (statistsNum > 150) {
        clothCost = (clothPrice * statistsNum) * 0.9

    } else {
        clothCost = clothPrice * statistsNum

    }
    let movieCost = clothCost + decorCost
    let diff = Math.abs(movieCost - buddget).toFixed(2)

    if (movieCost <= buddget) {
        console.log('Action!')
        console.log(`Wingard starts filming with ${diff} leva left.`)

    } else {
        console.log('Not enough money!')
        console.log(`Wingard needs ${diff} leva more.`)

    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);