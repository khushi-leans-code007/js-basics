// primitive 

// 7 types : String,Number,bulean,null,undefined,symbol,BigInt

// const score = 100 
// const scorevalue = 100.3
// const isloggedIn = false
// const outsidetemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(typeof id );

// // console.log(id === anotherId);                                                                                                                                                                               

// const bigNumber = 38565746547579874n

// console.log(typeof bigNumber);


//Reference/(non-primitive)
// Array, objects , functions

// const heros = ["shaktiman", "naagraj", "doga"]
// console.log(typeof heros);

// let myObj ={
// name: "khushi",
// age: 18,

// }


// const myfunction = function(){
// console.log("hello world");}



//=================================================================

// Stack (primitive), heap (non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername ="chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
email: "user@google.com",
upi: "user@ybl"

}
 let userTwo = userOne

 userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);








