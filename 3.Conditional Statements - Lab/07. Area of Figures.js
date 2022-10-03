function areaOfFigures(input) {
    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);

    let squareS = a * a;
    let rectangleS = a * b;
    let circleS = (a * a) * Math.PI
    let triangleS = (a * b) / 2;

    if (figure === "square") {
        console.log(squareS.toFixed(3));
    } else if (figure === "rectangle") {
        console.log(rectangleS.toFixed(3));
    } else if (figure === "circle") {
        console.log(circleS.toFixed(3));
    } else {
        console.log(triangleS.toFixed(3));
    }

}
areaOfFigures(["square", "5"])
areaOfFigures(["rectangle", "7", "2.5"])
areaOfFigures(["circle", "6"])
areaOfFigures(["triangle","4.5","20"])

//определено моя е по=крако и структорирано написано, грешката в начало идваше от последния елс , беше написа елс иф