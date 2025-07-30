//! functions-->Block of code whic is used to perform a specific task
//? non-parameterised

// function greetings(){
//     console.log("Good Afternoon");
// }
// greetings()


// //? parameterised
// function addition(a,b){
//     console.log(`addition of ${a} and ${b}is ${a+b}`);
//     // console.log(`addition of  ${a+b}`);
    
// }

// addition(10,10)
// addition(200,10)
// addition(100,150)


// function mul(n1,n2){
//     return n1*n2
// }
// console.log(mul(5,3));
// let res=mul(10,5)
// console.log(res);


// ? anonymous function

// let an = function(){
//     console.log("i am anamous function");
// }
// an()





// let r=function(a,b){
//     console.log(a+b);
    
// }
// r(10,2)


// let an=function(a,b){
//     return a+b
// }
// console.log(an(2,4));
// let rs=an(4,4)
// console.log(rs);


//! arrow function
// ()=>{
// block of code
// }

// let a=()=>{
// console.log("I am arrow Function");

// }
// a()

//! Explicit return

// let add = (a,b)=>{
//     return a+b
// }
// console.log(add(5,3));


//! implicit return

// let ad = (a,b)=>(a+b)
// console.log(ad(3,1));


// let name1 = R => R
// console.log(name1("Raja sekhar"));
//  function name(R){
//     return R
//  }
//  console.log(name("sekhar"));
 

//! immediately invoked function expression

 //? way:1 to call the functions

//  (function(){
//     console.log("I am a function");
//  })()


 //? way:2 to call the functions

//    (function(){
//      console.log("I am a function");
//    }())

//! there should be nothing in between function creation and function calling
// (function(){
//     console.log("Iam a function");
    
// })

// console.log("hello");

//! we cannot call the function more than once

// (function (a,b){
//     console.log(a+b);
    
// })(5,6)
// (4,2)



//! default parameters

// function add(a,b){
//     return a+b
// }

// console.log(add(2)); //NaN


// function add(a=1,b=1){
//     return a+b
// }

// console.log(add(2)); //3

// function add(a=1,b=1){
//     return a+b
// }

// console.log(add(2,4)); //6

// function add(a=1,b=1){
//     return a+b
// }

// console.log(add(2,4,2)); //6


// function add(a=1,b=1){
//     return a+b
// }

// console.log(add(2,0,3));  //2


//! pure function
// function mul(a,b){
//     return a*b
// }

// console.log(mul(5,6)); //30

//! impure function

// let n=prompt("enter number")
// function mul(a,b){
//     return a*b*n
// }
// console.log(mul(5,6));



//! Function debugging
// let a=10;
// var b=20;
// function sum(n1,n2){
//     let c=30;
//     console.log(c);
    
//     return n1+n2

// }
// console.log(sum(2,3));
// console.log(a);
// console.log(b);


//! hoisting is possible only in named function
// sum (3,2);   //5
// function sum(a,b){
//     console.log(a+b);
    
// }


//! hoisting is not possible with anonymous function

// sum (3,2);   //error
// let sum=function sum(a,b){

//     console.log(a+b);

// }


//! higher order function --> Function which accepts another function as an argument
//! call back function--> Function which passes as argument to another function

// function sum(a,b){
//     return a+b
// }
// function sum1(n1,n2,fun){
//     return fun(n1,n2)
// }
// console.log(sum1(2,3,sum));



// let radius = [2,5,7,8,3,4,9,11]
// function area(radii){
//     let output =[]
//     for(let i = 0;i < radii.length;i++){
//         output.push(Math.PI * radii[i] ** 2)
//     }
//     return output
// }
// console.log(area(radius));

// function dia(radii){
// let output = []
// for(let i = 0; i < radii.length;i++){
//     output.push(2*radii[i])
// }
// return output
// }
// console.log(dia(radius));


// let radius = [2,5,7,8,3,4,9,11,56]
// function area(r){
//     return Math.PI * r ** 2
// }
// function diameter(r){
//     return 2 * r
// }
// function hof(radii , logic){
//     let output = []
//     for(let i = 0; i < radii.length; i++){
//         output.push(logic(radii[i]))
//     }
//     return output
// }
// console.log(hof(radius , area));
// console.log(hof(radius , diameter));


//! Nested function
// function grandParent(){
//     let a=100;
//     console.log("grandParent",a);

//     function parent(){
//         let b=50;
//         console.log("Grand parent in parent",a);
//         console.log("parent",b);
        
//         function child(){
//             let c=20;
//             console.log("Grand parent in child",a);
//             console.log("Parent in child",b);
//             console.log("child",c);
            
//         }
//         child()
        
//     }
//     parent() 
// }
// grandParent();





//     function grandParent(){
//     let a=100;
//     console.log("grandParent",a);

//     function parent(){
//         let b=50;
//         console.log("Grand parent in parent",a);
//         console.log("parent",b);
        
//         function child(){
//             let c=20;
//             console.log("Grand parent in child",a);
//             console.log("Parent in child",b);
//             console.log("child",c);
            
//         }
//         return child
        
//     }
//    return parent
// }
// grandParent()()()



//! Argument object
// function sum(){
//     return arguments[0] + arguments[1] +arguments[2]+arguments[4]+arguments[6]   // here the arguments will start from 0,1,2,... like that format,arg(0+1+2+4+6) it means 0=2+1=3+4=6+6=8==>24
// }
// console.log(sum(2,3,5,4,6,7,8,9));





// let a=() =>{
//     return  arguments
// }
// console.log(a(3,2,4,6,5,7,8)); // in arrow function without parametr arguments cannot work



let str ="Stay Positive"

console.log([9]); //! t
console.log(str[-1]); //!undefined


console.log(str.length);

console.log(str.at(6));   //! o
console.log(str.at(9)); //! t
console.log(str.at(13));  //! undefined
console.log(str.at(-3)); //! i


console.log(str.charAt(2)); //!a
console.log(str.charAt(11)); //! v
console.log(str.charAt(13)); //! undefined
console.log(str.charAt(-4)); //! nothing will return


console.log((str.charCodeAt(3))); //! 121
console.log(str.charCodeAt(10));   //! 105

console.log((str.charCodeAt(14))); //! NaN
console.log(str.charCodeAt(-3));    //! NaN

console.log(str.concat("Be negative","all"));  //!Stay PositiveBe negativeall


console.log(str.includes("z")); //! false
console.log(str.includes("p")); //! false
console.log((str.includes("P"))); //! true because here we are passed capital 'p' which is in string


console.log(str.repeat(10));


console.log(str.replace("Stay","Be"));
console.log(str.replace("i","0"));
console.log(str.replaceAll("Stay Positive","Be Positive"));

console.log(str.substring(0,4));


console.log(str.toUpperCase());


console.log(str.slice(0,5));


















