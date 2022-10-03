function summerOutfit(input) {
 
    let degrees = Number(input[0]);
    let timeOfTheDay = input[1];
    let outfit;
    let shoes;
 
    if (10 <= degrees && degrees <= 18) {
        switch (timeOfTheDay) {
            case ("Morning"):
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                
                break;
            case ("Afternoon"):
                outfit = "Shirt";
                shoes = "Moccasins";
               
                break;
            case ("Evening"):
                outfit = "Shirt";
                shoes = "Moccasins";
                
                break;
        }
    }else  if (18 < degrees && degrees <= 24) {
        switch (timeOfTheDay) {
            case ("Morning"):
                outfit = "Shirt";
                shoes = "Moccasins";
                
                break;
            case ("Afternoon"):
                outfit = "T-Shirt";
                shoes = "Sandals";
                
                break;
            case ("Evening"):
                outfit = "Shirt";
                shoes = "Moccasins";
                
                break;
        }
    } else if (degrees >= 25) {
        switch (timeOfTheDay) {
            case ("Morning"):
                outfit = "T-Shirt";
                shoes = "Sandals";
               
                break;
            case ("Afternoon"):
                outfit = "Swim Suit";
                shoes = "Barefoot";
                
                break;
            case ("Evening"):
                outfit = "Shirt";
                shoes = "Moccasins";
                
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["22",
"Afternoon"]);