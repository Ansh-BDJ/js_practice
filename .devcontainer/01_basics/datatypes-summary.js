// Primitive
// 7-types: string, number, boolean, null, undefined, symbol, bignint

const score = 100
const scoreValue = 100.5
const isLoggedIn = true
const outsideTemp = null
let userEmail;

//const bigNumber = 537623546235842n

const Id = Symbol("123")
const anotherId = Symbol("123")

//console.log(Id === anotherId);


// Reference (Non Primitive)
// array, objects, functions

const heros = ["shaktimaan", "nagraj", "doga"]
let myObj = {
    name: "Ansh",
    age: 22
}

const myFunction = function () {
    console.log("Hello world!");
}
//console.log(typeof anotherId);


// ************************
// Stack(Primitive)         Heap(Non-Primitive)

let youtubeName = "Ansh BDJ"
let anotherName = youtubeName
anotherName = "bdjprod"

//console.log(anotherName);
//console.log(youtubeName);

let userOne = {
    email: "ansh@gmail.com",
    upi: "bdj@12"
}
let userTwo = userOne
userTwo.email = "bdj@outlook.com"
console.log(userOne.email);
console.log(userTwo.email);




