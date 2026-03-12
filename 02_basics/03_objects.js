//singleton
//Object.create (by constructors)

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Ansh",
    "full Name": "Ansh BDJ",
    [mySym]: "mykey",
    age: 21,
    location: "Bareilly",
    email: "ansh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full Name"]);

//console.log(JsUser[mySym]);
//console.log(typeof JsUser[mySym]); //why this giving me string type

JsUser.email = "ansh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "ansh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello js user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JsUser, ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

