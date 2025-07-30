// let arr =["raja","sekhar","tejesh","mukesh"]
// console.log(arr);


// //! returns length of an array
// console.log(arr.length);


// //! add elements at the end of an array

// // arr.push("saha","mahi","ganesh")
// // console.log(arr);

// //! to remove element at the end of an array

// // arr.pop()
// // arr.pop()


// // console.log(arr);

// //! add elemnts starting of an array

// // arr.unshift("rupesh","jagan")

// // console.log(arr);

// //! to remove elements starting of an array

// // arr.shift()
// // arr.shift
// // console.log(arr);


// //! concat--> combine two or more arrays

// // let arr2=["shanwikh","harshi"]
// // console.log(arr.concat(arr2,[10,20,30]));
// // console.log(arr);


// let arr =["raja","sekhar","tejesh","mukesh","shanwikh"]

















// let arr = [10,3,8,9,6]
// console.log(arr);

// let arr1 = [10,"hello",true,null]
// console.log(arr1);

// //! adding new element to an array

// arr1[4] = "bye"
// console.log(arr1);

// //! updating element in an array

// arr1[2] = false
// console.log(arr1);

// //! deleting element form an array 

// delete arr1[0]
// console.log(arr1);

// console.log(arr1[1]);
// console.log(arr1[-1]);

// let arr2 = new Array("hello")
// let arr3 = new Array(10)
// let arr4 = new Array(10,30,78,"hello")

// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr4[1]);
// arr4[4] = "bye"
// arr4[2] = true
// console.log(arr4);

// let arr = ["yarab","raja","mukesh","sathya"]

// console.log(arr);

// //! returns length of an array
// console.log(arr.length);

// //! add elements at the end of an array

// arr.push("supraja","mounika")
// console.log(arr);

// //! remove element at the end of an array

// arr.pop()
// arr.pop()
// console.log(arr);

// //! add element at the starting of an array

// arr.unshift("bindu","hema")
// console.log(arr);

// //! remove element at the starting of an array

// arr.shift()
// arr.shift()
// console.log(arr);

// //! concat --> combine or add two or more arrays

// let arr2 = ["mahesh","prabhas"]
// console.log(arr.concat(arr2,10,20,30));

// let arr = ["yarab","raja","mukesh","sathya","raja","mukesh"]

// console.log(arr.at(1));
// console.log(arr.at(-2));

// console.log(arr.indexOf("raja"));
// console.log(arr.lastIndexOf("raja"));

// console.log(arr.includes("Mukesh"));
// console.log(arr.includes("mukesh"));

// console.log(arr.join());
// console.log(arr.join(""));
// console.log(arr.join(" "));

// console.log(arr.fill(0));
// console.log(arr.fill("a"));
// console.log(arr.fill("hello"));
// console.log(arr.fill(true));

// console.log(arr);




// let arr = ["yarab","raja","mukesh","sathya","raja","mukesh","sekhar","mahi","saha"]
//  console.log(arr.slice(2,4));  //! first value is indexing value and the second indexing value we need to add +1
//   console.log(arr.slice(-4,-2)); 
//  console.log(arr.slice(-6,-4)); 
//  console.log(arr.slice(2,-4)); 
//  console.log(arr.slice(-5,4)); 
//  console.log(arr.slice(-6,-2)); 

 

// let arr = ["yarab","raja","mukesh","sathya","mukesh","sekhar","mahi","saha"]

// arr.splice(2,1)  //! here first number is staring index and second number is how many numbers want to delete
// arr.splice(4,2)
// arr.splice(-4,2)
// arr.splice(1,2,"rupesh","jagan") ///! if we want to add an array by using this 
// arr.splice(1,0,"rupesh","jagan")
// console.log(arr);


//! flat()

// let arr = [10,20,[30,40,[50,60,[70,80,[90]]]]]

// console.log(arr.flat());

// console.log(arr.flat(1));

// console.log(arr.flat(2));

// console.log(arr.flat(3));

// console.log(arr.flat(4));



//! higher order methods

//! find()

// let arr = [30,40,20,41,10,67,87,21,54,9,40,8]

// let res = arr.find((val)=>{
//     return val>40
// })
// console.log(res);

//! find index

// let arr = [30,40,20,41,10,67,87,21,54,9,40,8]

// let res1 = arr.findIndex((val)=>{
//     return val>40
// })
// console.log(res1);


// let arr = [30,40,20,41,10,67,87,21,54,9,40,8]

// let res = arr.findIndex((val)=>{
//     return val>50
// })
// console.log(res);


//! findlastindex

// let arr = [30,40,20,41,10,67,87,21,54,9,40,8]

// let res = arr.findLastIndex((val)=>{
//     return val>40
// })
// console.log(res);



// let arr = [30,40,20,41,10,67,87,21,54,9,40,8]

// let res = arr.findLastIndex((val)=>{
//     return val>60
// })
// console.log(res);


//! some()

// let arr = [10,12,30,34,2]

// let res = arr.some((val)=>{
//     return val % 2 ==0
// })
// console.log(res);




// let arr = [11,13,15,3,7]

// let res = arr.some((val)=>{
//     return val % 2 ==0
// })
// console.log(res);




//! every()

// let arr = [10,12,30,34,2]

// let res = arr.every((val)=>{
//     return val % 2 ==0
// })
// console.log(res);


// let arr = [10,12,30,35,2]

// let res = arr.every((val)=>{
//     return val % 2 ==0
// })
// console.log(res);



//! sort()

// let arr = [10,7,30,50,2,98,34]

// let res = arr.sort((a,b)=>{

//     return a-b
// })

// console.log(res);




// let arr = [10,7,30,50,2,98,34]

// let res = arr.sort((a,b)=>{

//     return b-a
// })

// console.log(res);





//! map()

// let arr = [10,7,30,50,2,97,31]

// let res = arr.map((val)=>{
//     return val*2
// })
// console.log(res);


// let arr = [10,7,30,50,2,97,31]

// let res = arr.map((val)=>{
//     return val + 5
// })
// console.log(res);


// let arr = [10,7,30,50,2,97,31]

// let res = arr.map((val)=>{
//     return val - 2
// })
// console.log(res);


//! filter()

//   let arr = [10,7,30,50,2,97,31]

//   let res = arr.filter((val)=>{
//     return val % 2==0
//   })
//   console.log(res);
  

//! reduce()

//   let arr = [10,7,30,50,2,97,31]
//    let res = arr.reduce((acc,val)=>{
//     return acc + val
//    })
//    console.log(res);


  // let arr = [10,7,30,50,2,97,31]
  //  let res = arr.reduce((acc,val)=>{
  //   return acc + val
  //  },100)
  //  console.log(res);
   



let arr3 = [1,2,3,4,5]
console.log(arr3.reverse());

console.log(arr2);









