/*
for (let index = 0; index < 10; index++) {
    const element = array[index];
    
}

for ([initialExpression/declaration]; [condition]; [changer]){
    //body
}
*/
let userScore = 10
const minValue = 0

// if score hits 5, don't print anything after that
// remove previous demand, if score hits 5, skip printing 5 but rest value should be printed
let username = "hitesh"

for(userScore; userScore >= minValue; userScore ){
    // if (userScore == 5) {
    //     break;
    // }

    if (userScore == 5) {
        continue
    }
    console.log(`Userscore is ${userScore}`);

    console.log(username);
}
