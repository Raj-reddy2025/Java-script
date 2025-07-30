// let user = {
//     username : "raja",
//     age : 22,
//     gender : "male"
// }

const { use } = require("react");



// console.log(user.username);

// console.log(user.gender);

// console.log(user['age']);


//! adding new property to the object

// user.city="tirupati"

// user.institute="Qspyders"

// console.log(user);

//! upadting the property in the object

// user.age=21
// console.log(user);


//! delete

// delete user.gender

// console.log(user);
 

// let obj1 = new Object({emp:"sekhar",sal:200000,location:"Tirupati"})

// obj1.shift="rotational"

// console.log(obj1);




let user = {
    username : "raja",
    age : 22,
    gender : "male",
    city : "chittoor"
}

let user1={
    salary:234000,
    phno :93758838793,
    colour:"green",
    age:22
}

console.log(Object.keys(user));
console.log(Object.values(user));

console.log(Object.assign(user1,user));



Object.seal(user)

user.salary=24098765


delete user.gender
// console.log(user);

// console.log(Object.isSealed(user));


Object.freeze(user)


user.salary=29877890
// console.log(user);






