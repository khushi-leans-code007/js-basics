// const tinderUser = new Object()

// console.log( tinderUser);
  //singleton

const tinderUser2  = {}
tinderUser2.id = "1234"
tinderUser2.name = "khushi"
tinderUser2.isLoggedIn = false
// console.log(tinderUser2);

const regularuser = {
email: "some2503@gmail.com",
fullname: {userfullname:{
    firstname: "khushi",
    lastname: "mishra"
}}
}
// console.log(regularuser.fullname.userfullname);


const Objt1 = {1: "a", 2: "b",}
const Objt2 ={3: "c", 4: "d",}
const Objt3 ={5: "e", 6: "f",}

// const Objt4 = Object.assign({}, Objt1, Objt2, Objt3 )
// console.log(Objt4);

const objt4 = {...Objt1,...Objt2,...Objt3}
// console.log(objt4);

const user  = [{id: 1,
    email: "g@gmail.com"
},

{id: 1,
    email: "g@gmail.com"
},{

},{

}
]
user[1].email


// console.log(tinderUser2);

// console.log(Object.keys(tinderUser2)); //output is aaray so you can do loop function or etc
// console.log(Object.values(tinderUser2));
// console.log(Object.entries(tinderUser2));

// console.log(tinderUser2.hasOwnProperty('isLoggedIn'));

// console.log(tinderUser2.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "khushi" 
}
// course.courseInstructor
const {courseInstructor: Instructor} = course
console.log(Instructor);

//    {
//     "name": "khushi",
//     "coursename": "js in hindi",
//     "price": "free"
//    }
           










































































