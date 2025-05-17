function sayMyName(){
console.log("k");
console.log("h");
console.log("u");
console.log("s");
console.log("h");
console.log("i");

}
// sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    
    // return result
    // console.log("khushi")it does not excute .Nothing can excute after result

    return number1 + number2
 }
const result = addTwoNumbers(3, 4)

// console.log("Resutl:", result);

// function loginusermessage(username){
// if(username === undefined){
// console.log("please enter a username")
// return

// }
// return `${username} just logged in`

// }

// console.log(loginusermessage());

// function loginusermessage(username){
//     if(!username){
//     console.log("please enter a username")
//     return
    
//     }
//     return `${username} just logged in`
    
//     }
    
//     console.log(loginusermessage());
    

    function loginusermessage(username = "sam"){
        if(!username){
        console.log("please enter a username")
        return
        
        }
        return `${username} just logged in`
        
        }
        
        // console.log(loginusermessage("khushi"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400 , 500, 2000 ));

// const user = {
//     username: "khushi", 
//     // price: 199                 check typesafty
    
// }
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
     
}

// handleObject(user)


handleObject({
    username:"khushi",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[2]
}
// console.log(returnSecondvalue(myNewArray ));
console.log(returnSecondvalue(200, 400, 100, 600, 1000 ));
























































































