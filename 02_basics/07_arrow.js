const user = {
    username: "khushi",
    price: 199,
    welcomeMessage: function(){
        cconsole.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.price = 299
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = " khushi"
//     console.log(this.username);
    
// }

// chai() this context is only use in object not in a function

// function anotherchai(){
//     let username = "khushi"
// console.log(this.username);

// }

// const chai = function () {
//     let username = "khushi"
//     console.log(this.username);
    
// }

// const chai = () => {
//     let username = "khushi"
//     console.log(this);
    
// }

// chai()

// const addtwo = (num1 , num2) => {   {explicit return}      ***when we use curly braceses we use return keyword
//     return num1 + num2
// }
// console.log(addtwo(3, 4));


// there is another way of write  a function


// const addTwo = (num1, num2) => num1 + num2 impl

// const addTwo = (num1, num2) => (num1 + num2) (implicit retur)  when we use () return keyword not needed
const addTwo = (num1, num2) =>( {username: "khushi"})
console.log(addTwo(3, 4)); 

const myArray = [1, 2, 3, 4, 5]
myArray.forEach(() => {}) 






































































