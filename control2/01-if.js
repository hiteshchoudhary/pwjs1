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
    bullets = 2000
    console.log(`Your bullets are ${bullets}`);
} else {
    console.log("you don't get a life");
}

console.log(`Your score is ${score} and my life is ${life} and bullets are ${bullets}`);


// short hands

let balance = 500 

// never do this
if (balance > 100) 
    console.log("Balance is above 500"),
    console.log("Balance is above 500"),
    console.log("Balance is above 500")



// build a rating system for pizzahut

// 1 star - poor
// 2 star - emm, ok
// 3 star - average
// 4 star - cool
// 5 star - great
// 6 star - awesome
// 7 star - nailed it

let getStarFromUser = "2"
let starInNumber = parseInt(getStarFromUser)


if (starInNumber == 1) {
    console.log("1");
}

if (starInNumber == 2) {
    console.log("2");
}
if (starInNumber == 3) {
    console.log("3");
}


if (starInNumber == 1) {
    console.log("poor");
} else if (starInNumber == 2) {
    console.log("emm, ok");
} else if (starInNumber == 3){
    console.log("average");
} else if (starInNumber == 4){
    console.log("cool");
}else if (starInNumber == 5 ){
    console.log("great");
} else if (starInNumber == 6){
    console.log("awesome");
} else if (starInNumber == 7) {
    console.log("Nailed it !!!");
} else {
    console.log("I don't know that rating !!!");
}



// short hand syntax
// if(balance > 10) console.log("IF part");
// else console.log("Else part");