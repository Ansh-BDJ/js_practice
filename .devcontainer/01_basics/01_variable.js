const accountId = 8765
let accountEmail = "ansh@gmail.com"
var accountPassword = "12345"
acccountCity = "Delhi"
let accountState;

//accountId = 4567 //NOT ALLOWED

accountEmail = "bdj@gmail.com"
acccountCity = "Mumbai"
accountPassword = "9999"
/*
 prefer not to use var, because of issue in block scope and function scope.
*/
console.table([accountId, accountEmail, accountPassword, acccountCity, accountState]);
