function animalType(input) {
    let teyp = input[0]

    switch (teyp) {
        case 'dog':
            console.log('mammal');
            break;
        case 'crocodile':
        case 'snake':
        case 'tortoise':
            console.log('reptile');
            break;
    
        default:
            console.log('unknown');
            break;
    }
}
animalType(["dog"]);
animalType(["snake"]);
animalType(["cat"]);