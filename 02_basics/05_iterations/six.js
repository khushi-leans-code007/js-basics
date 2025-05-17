// const coding = ["js", "java", "python", "ruby"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// // console.log(values); foreach return undefined 



// const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter(() => {})

// const newnums = myNums.filter( (num) => num>4 ) 
// when we not use { scope} we write in one line
// console.log(newnums);





//  when we open scope {}  we use return keyword

// }) 
 
// console.log(newnums);

// const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         // newNums.push(num)      push= basic array function to oush the value
    
//     }
// })

// console.log(newNums);
 

// filter method
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
   
  let userbooks =   books.filter((bk) => bk.edition >= 1990)

  // userbooks = books.filter( (bk) => {
  //   return bk.publish>= 1995 && bk.genre ==="Science"

    

  // })
  console.log(userbooks);
  






































































