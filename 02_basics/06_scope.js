
// var c = 300
let a = 600
if (true) {
    let a = 10
    const b = 20
//    console.log("INNER:", a);
   
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "khushi"
   
    function two(){
        const website = " youtube"
        // console.log(username  );
        
        
    }
    // console.log(website);     it does not run 
    // two()
}

one()

if(true){
    const username= "khushi"
if (username === "khushi"){
    const website = " youtube"
    // console.log(username + website);
    
}
// console.log(website); it does not run because iti is out of a function
}

// console.log(username); username name scope does not here


// *********************************** INTEReSTING****************
// console.log(addone(5))
function addone(num){
    return num + 1
}


// console.log(addtwo(5)); it is a concept of hoisting

const addtwo = function(num2){
  return num2 + 2
}


console.log(addtwo(5));














































