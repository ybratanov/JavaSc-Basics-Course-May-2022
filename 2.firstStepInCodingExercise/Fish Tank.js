function fishTank (input){

let l = Number (input[0]);
let w = Number (input[1]);
let h = Number (input[2]);
let percentage = Number (input[3]);

let fishTankVolume = l * w * h;

let fishTankVolumeInLiters = fishTankVolume / 1000
let total = fishTankVolumeInLiters - ( fishTankVolumeInLiters * (percentage / 100 ))

console.log(total);

}

fishTank(
    ["85 ",
"75 ",
"47 ",
"17 "]

);