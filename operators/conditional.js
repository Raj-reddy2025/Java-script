// //! if statement

// let num=12;
// if(num % 2 ==0){
//     console.log(num+ "  is a even number");
    
// }


// //! if else statement

// let num=11;
// if(num % 2 ==0){
//     console.log(num+ "  is a even number");
// }
//    else{
//      console.log(num+ "  is a odd number");
//    }


//! else if ladder

// let marks=84;
// if (marks>100){
//     console.log("Please enter the marks below 100");
// }else if (marks>90 ){
//     console.log("Grade A");
    
// }else if (marks>80 ){
//     console.log("Grade B");
    
// }else if (marks>70 ){
//     console.log("Grade C");
    
// }else if (marks>60 ){
//     console.log("Grade D");

// } else{
//     console.log(" You are Fail");
    
// }


//!switch case

// let day=8;
// switch(day){
//     case 0:
//         console.log("sunday");  
//         break;
//     case 1:
//         console.log("monday"); 
//         break;
//     case 2:
//         console.log("Tuesday");   
//         break;
//     case 3:
//         console.log("Wednesday"); 
//         break;
//     case 4:
//         console.log("Thursday");  
//         break;
//     case 5:
//         console.log("Friday");   
//         break;
//     case 6:
//         console.log("saturday");  
//     default:
//         console.log("Enter the value below 6 and above 0");  
// }

//! AEIOU

// let vowel="A" ;
// switch(vowel.toLowerCase()){
//     case 'a':
//         console.log("vowel is A");  
//         break;
//     case 'e':
//         console.log("vowel is E"); 
//         break;
//     case 'i':
//         console.log("vowel is I");   
//         break;
//     case 'o':
//         console.log("vowel is O"); 
//         break;
//     case 'u':
//         console.log("vowel is U");  
//         break;
    
//     default:
//         console.log("This is a consonent");  
// }

//! AEIOU

// let ch=prompt("enter value").toLowerCase()
// switch(true){
//     case(ch=="a" || ch=="e" || ch=="i" ||ch=="o" || ch=="u"):
//     console.log(ch+"  it is a consonent");
//     break;
//     default:
//         console.log(ch+"   it is a consonent");
// }

//!AEIOU
// let ch=prompt("enter value").toLowerCase()
// switch (ch){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log(ch+  "  it is a vowel");
//     break;
//     default:
//         console.log(ch+   "   it is a consonent");
// }



// //! nested if
// let num=prompt("Enter the number")
// if(num % 2 == 0){
//     if(num >= 0){
//         console.log(num+  "is even and positive");    
// }
// else{
//     console.log(num+  "is even and negative");
    
// }
// if(num >= 0){
//         console.log(num+  "is odd and positive");
// }
// else{
//     console.log(num+  "is odd and negative");
// }   
// }


let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let op = prompt("Enter operator (+, -, *, /):");

let result;

switch(op) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = a / b;
    break;
  default:
    console.log("Invalid operator");
}

if (result !== undefined) {
  console.log("Result = " + result);
}