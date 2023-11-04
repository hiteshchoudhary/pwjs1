// Primitive (STACK)
/*
String
Number
Boolean
Null
Undefined
Symbol
BigInt

*/
const firstname = "Sathvik"
const age = 20
const score = 200.9
let isLoggedIn = false
const nodeVersion = null
let bankBalance = undefined
const buttonId = Symbol("id")
const aReallyLongNumber = 900713344232343n



// Reference (Non-primitive) - Objects (HEAP)

/*
Arrays
Objects
Functions

*/

const numbers = [1, 2, 3, 4, 5]
const heroes = [
    "superman", 
    "batman", 
    "flash",
    true,
    123
]

const userObject = {
    name: "hitesh",
    age: 20,
    isLoggedIn: true
}



//function
const sayHello = function(){
    console.log("hitesh")
}

const registerAUser = function(){}
const loginUser = function(){}