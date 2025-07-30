// creating a variable using var keyword

//! declaration  ✓

// var age;
// console.log(age);

//! initilization ✓

// age=23;
// console.log(age);

//! re-initialization ✓

// age=24;
// console.log(age);

//! re-declaration ✓

// var age;
// console.log(age);

// !declaration and initialization in a single line ✓

// var first_name="raja";
// console.log(first_name);



// creating a variable using let keyword

//! declaration

//! declaration ✓
// let age;
// console.log(age);

//! initilization ✓

//  let age=23;
// console.log(age);

// !re-initialization ×

// let age=24;
// console.log(age);

//! re-declaration ✓

// let age;
// console.log(age);

//! declaration and initialization in a single line ✓

// let first_name="raja";
// console.log(first_name);


// creating a variable using const keyword
//! declaration ×
// const age;
// console.log(age);

// !initialization ×
// age=23;
// console.log(age);

//! declaration and initialization in a single line ✓

//  const age=23;
// console.log(age);

//! hoisting(default behaviour of js,moving declarations to the top of the scope)

// var age;
// console.log(age);
// var age=33;

// !TDZ(Temporal Dead Zone)--->Zone where the variable(let,const) will 
//! be stored after declaration before initialization

console.log(age);
let age=25;
