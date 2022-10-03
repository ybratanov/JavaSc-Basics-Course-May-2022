function traveling(input) {
    let index = 0;
    let coment = input[index];
    index++;
    while (coment !== "End") {
        let destination = coment;
        let cost = Number(coment);
        if (destination != cost) {
            console.log(`Going to ${destination}!`)
        }
        coment = input[index];
        index++;
    }

}
traveling(["Greece", "1000","200","200","300","100","150","240","Spain","1200",
"300","500","193","423","End"])
    console.log("-------------------------");
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360",
 "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])