const marvelheros = ["thor", "ironman", "spiderman"]
const dcheros = ["superman", "flash", "batman"]

// marvelheros.push(dcheros)

// console.log(marvelheros);


// const allheros = marvelheros.concat(dcheros)

// console.log(allheros);


const allheros = [...marvelheros,...dcheros]
// console.log(allheros);
// spread

const another_array = [1, 2, 3,[ 4, 5, 6], 7, [6, 7, [4, 5]]]


const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("khushi"))
console.log(Array.from("khushi")) 

console.log(Array.from({name: "khushi"}))   //intersting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))





















