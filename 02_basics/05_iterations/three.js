// for of

// [{}, {}, {},]

const arr = [1, 2, 3, 4, 5]


// for (const element(iterator) of object) {
    
// }

for (const num of arr) {
    // console.log(num);
    
    
}

const greetings = "helloworld!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
    
}


//Maps is a object datatype for stroe multiple types of key and value, unique value and jiss order mai kiya hai ossi order mai value ayegi

const map = new Map()
map.set("IN", "india")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("I", "Italy")

// console.log(map);      

for (const [key, value] of map) {
    console.log(key,"-", value);
    
}
// it is not run on an onject value
const myObject = {
    'game1': 'nfs',
    'game2': 'spiderman'

}

for (const [key, value] of myObject) {
    console.log(key,"-", value);
    
}




































































