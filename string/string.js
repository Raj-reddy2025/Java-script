let str = "Stay Positive"

// console.log(str[9]); //t
// console.log(str[-1]); // undefined

// console.log(str.length); //! 13

// console.log(str.at(0)); // S
// console.log(str.at(9)); //t
// console.log(str.at(13)); //undefined
// console.log(str.at(-3)); //i

// console.log(str.charAt(2)); //a
// console.log(str.charAt(11)); //v
// console.log(str.charAt(13)); 
// console.log(str.charAt(-3)); //nothing with return

// console.log(str.charCodeAt(3)); //121
// console.log(str.charCodeAt(10)); //105
// console.log(str.charCodeAt(14)); //nan
// console.log(str.charCodeAt(-3)); //nan

// console.log(str.concat("Be negative", "all")); //! stay positive Benegative all

// console.log(str.includes("z")); //! false
// console.log(str.includes("p")); //! false
// console.log(str.includes("P")); //! true


// console.log(str.indexOf('a')); //! 2

// console.log(str.lastIndexOf('y')); //! 3


// let str1 = "     Stay Postitive      "
// console.log(str1.trim());
// console.log(str1.trimStart());
// console.log(str1.trimEnd());

// console.log(str.includes('e')); //! true
// console.log(str.includes('z')); //! false

// console.log(str.startsWith('S')); //! true
// console.log(str.startsWith('z')); //! false

// console.log(str.endsWith('e')); //! true
// console.log(str.endsWith('r')); //! false

// console.log(str.repeat(3)); //! Stay PositiveStay PositiveStay Positive

// console.log(str.replace('Stay','hi')); // hi positive

// console.log(str.replaceAll('Stay','Hi'));

// console.log(str.slice(0,3)); //! Sta

// console.log(str.substring(0,3)); //! Sta 

// console.log(str.split()); //! ['stay positive]

// console.log(str.split('')); //!(13) ['S', 't', 'a', 'y', ' ', 'P', 'o', 's', 'i', 't', 'i', 'v', 'e']

// console.log(str.toLocaleUpperCase()); //! STAY POSITIVE

// console.log(str.toLocaleLowerCase()); //! stay positive

// let str2 = "l"
// let str3 = "e"

// console.log(str2.padEnd("4","uck")); //! luck
// //? padstart
// console.log(str3.padStart("4", "cut")); //! cute

// let str4 = "welcome"

// console.log(str4.match("o"));
// console.log(str4.match("u"));  

// let str5 = "stay positive"

// console.log(str5.slice(0,3));  //!stay 
// console.log(str5.slice(0,13)); //!stay positive
// console.log(str5.slice(0));    //!stay positive
// console.log(str5.slice(5,13));  //!positive
// console.log(str5.slice(9,13)); //!tive
// console.log(str5.slice(9));   //! tive
// console.log(str5.slice(-3,-6));  //! empty
// console.log(str5.slice(-6,)); //! sitive
// console.log(str5.slice(9,-4)); //! empty


// console.log(str5.substring(0,4)); //! stay
// console.log(str5.substring(6,0)); //! stay p
// console.log(str5.substring(9,9)); //! empty
// console.log(str5.substring(9,13)); //! tive
// console.log(str5.substring(2,-9)); //! st
// console.log(str5.substring(-5,12)); //! stay positiv

// console.log(str5.substr(9,2)); //! ti
// console.log(str5.substr(5,3)); //! pos
// console.log(str5.substr(2,13)); //! ay positive
// console.log(str5.substr(9,13)); //! tive