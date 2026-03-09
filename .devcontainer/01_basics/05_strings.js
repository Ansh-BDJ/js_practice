const name = "Ansh"
const repoCount = 50

//console.log(name + repoCount + "Value");    old fashion

//console.log(`My name is ${name} and my repo count is ${repoCount} `);

const gameName = new String("ansh-bdj")
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4) // we cant use negative indexes
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "      ansh      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ansh.com/ansh%20bdj"
console.log(url.replace('%20', '-'));
console.log(url.includes("ans"));
console.log(gameName.split('-'));

