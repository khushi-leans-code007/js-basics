const userEmail = []

if (userEmail){
    console.log("Got user Email");
    

}else {
    console.log("Dont have user email");
    
}

// falsy value

// "", 0, -0, null, BigInt 0n, false, undefined, NaN


// truthy values

// " ",true, 'false',  "0", [array], {object}, function()

// if (userEmail.length === 0){
//     console.log("array is empty");
    
// }

const emptyobj = {}

if (Object.keys(emptyobj).length ===0) {
    // console.log("Object is empty");

    
}

// Nullish coalescing oprator (??): null undefined


let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

console.log(val1);


// terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80")


















































































































