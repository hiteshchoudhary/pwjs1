let temperature = 16

if (temperature < 20){
    //body - executable code
    console.log("it's really cold");
} else {

    console.log("it's really HOT");
}

console.log("PW SKILLS");



// above 99, you get a life up
// below that you don't get it

// a welcome message to game

let score = 110
let life = 3
let bullets = 1000
console.log('Welcome to the PW game');

if (score > 99) {
    console.log("you gained a life");
    score = score - 100
    life = life + 1
    let bullets = 2000
    console.log(`Your bullets are ${bullets}`);
} else {
    console.log("you don't get a life");
}

console.log(`Your score is ${score} and my life is ${life} and bullets are ${bullets}`);

