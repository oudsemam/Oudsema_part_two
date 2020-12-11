// Events/Promts
var rain = prompt ("How many inches of rain fell?");
var fertilizer = prompt ("Did you use fertilizer?")

//variables
let star = '*';
let grainBushels = 50;

//funtions and switches
function rainYeild () {
    
    if (rain > 20) {
        grainBushels *= 0.9;
        return grainBushels;

    } else if (rain < 10) {
        grainBushels *= 0.8;
        return grainBushels;

    } else {
        return grainBushels;
    }
} 

function fertilizeType() {
    var fertType = prompt ("Did you use premium or regular fertilizer?")
    switch (fertType) {
        case "regular":
            grainBushels *= 1.1;
            break;
        case "premium":
            grainBushels *= 1.15;
            break;
    }
}

switch (fertilizer) {
    case "yes":
        rainYeild() && fertilizeType();
        break;

    case "no":
        rainYeild();
        break;
}


//output
console.log(star.repeat(rain));
console.log("The yield should be " + grainBushels.toFixed(2) + " bushels per acer.")