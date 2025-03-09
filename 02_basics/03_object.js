// singleton
// Object.create

// object literal
// s


const mySym = Symbol("key1")
const JsUser = {
name: "khushi", 
"full name": "khushi Mishra",
[mySym]: "mykey1",
age: 18, 
location: "delhi",
email: "khushi2503@gmail.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Saturday"]

} 

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "khushi2342@gmai.com"
// Object.freeze(JsUser)


// JsUser.email = "amanmiagra234@gmail.com"

// console.log(JsUser);

JsUser.greeting = function() {console.log("Hello js user");

}


    
JsUser.greetingTwo = function() {console.log(`Hello js user, ${this.name}`);

}



console.log(JsUser.greeting());


console.log(JsUser.greetingTwo());



































































