// dates 

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 23)
// console.log( myCreatedDate.toLocaleDateString());
// in javascript month starts with 0 

// let myCreatedDate = new Date(2025, 0, 23, 5, 3)

let myCreatedDate = new Date("02-27-2025")
// console.log( myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log( myTimeStamp);
// console.log(myCreatedDate.getTime());

// Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(newDate.getMonth());
console.log(newDate.getFullYear());



console.log(`${newDate.getMonth()} and the time is ${newDate.getHours}`);



newDate.toLocaleString("default", {weekday:"long",timeZone:''})

 
                                                                       
                                  






