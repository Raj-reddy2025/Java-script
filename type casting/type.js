//! type conversion (explicitly)

//TODO number

// let num1=Number("10")
// console.log(typeof num1,num1); //! number 10

// let num2=Number("hello")
// console.log(typeof num2,num2); //!NaN

// let num3=Number("h")
// console.log(typeof num3,num3); //!NaN

// let num4=Number(true)
// console.log(typeof num4,num4); //!1

// let num5=Number(true)
// console.log(typeof num5,num5); //! 0

// let num6=Number(null)
// console.log(typeof num6,num6); //! 0

// let num7=Number(undefined)
// console.log(typeof num7,num7); //! undefined

// let num8=Number(4569n)
// console.log(typeof num8,num8); //! 4569


// let num9=Number(76.566)
// console.log(typeof num9,num9); //! 76.566

// let num10=Number("76h")
// console.log(typeof num10,num10); //! NaN

// let num11=Number("h11")
// console.log(typeof num11,num11); //! NaN



// //! parseInt()

// let n1=parseInt(10)
// console.log(n1,typeof n1); //! 10 'number'


// let n2=parseInt(10.4567)
// console.log(n2,typeof n2); //! 10 'number'

// let n3=parseInt("10")
// console.log(n3,typeof n3); //! 10 'number'

// let n4=parseInt("10h")
// console.log(n4,typeof n4); //! 10 'number'

// let n5=parseInt("n10")
// console.log(n5,typeof n5); //! NaN 'number'

// let n7=parseInt("10.4hello")
// console.log(n7,typeof n7); //! 10 'number'


//! parseFloat()

// let n1=parseFloat(10)
// console.log(n1,typeof n1); //! 10 'number'


// let n2=parseFloat(10.4567)
// console.log(n2,typeof n2); //! 10.4567 'number'

// let n3=parseFloat("10")
// console.log(n3,typeof n3); //! 10 'number'

// let n4=parseFloat("10h")
// console.log(n4,typeof n4); //! 10 'number'

// let n5=parseFloat("n10")
// console.log(n5,typeof n5); //! NaN 'number'

// let n7=parseFloat("10.4hello")
// console.log(n7,typeof n7);    //! 10.4 'number'

// let n8=parseFloat(true)
// console.log(n8,typeof n8);    //! NaN 'number'

// let n9=parseFloat(true)
// console.log(n9,typeof n9);    //! NaN 'number'


//! String()

// let str1=String(10)
// console.log(str1,typeof str1);  //! 10 string


// let str2=String(10.34)
// console.log(str2,typeof str2);

// let str3=String(true)
// console.log(str3,typeof str3);

// let str4=String(false)
// console.log(str4,typeof str4);

// let str5=String(undefined)
// console.log(str5,typeof str5);

// let str6=String(null)
// console.log(str6,typeof str6);


// let str7=String("hello")
// console.log(str7,typeof str7);

//! Boolean (truthy values)

// let b1=Boolean(true)
// console.log(b1,typeof b1);

// let b2=Boolean(1)
// console.log(b2,typeof b2);

// let b3=Boolean(' ')
// console.log(b3,typeof b3);

// let b5=Boolean(144.56)
// console.log(b5,typeof b5);

// let b4=Boolean(1456)
// console.log(b4,typeof b4);

// let b6=Boolean(0.78)
// console.log(b6,typeof b6);

// let b7=Boolean('raja')
// console.log(b7,typeof b7);

// let b8=Boolean('false')
// console.log(b8,typeof b8);



//!falsy values

// let b1=Boolean(0)
// console.log(b1,typeof b1);

// let b2=Boolean(null)
// console.log(b2,typeof b2);

// let b3=Boolean('')
// console.log(b3,typeof b3);

// let b5=Boolean(undefined)
// console.log(b5,typeof b5);

// let b4=Boolean(NaN)
// console.log(b4,typeof b4);

// let b6=Boolean(false)
// console.log(b6,typeof b6);



//! Type coersion---->(implicitly)

// let a=10;
// let b=20;
// let res=a+b;
// console.log(a+b,typeof res);  //30 'number'


// let s1=10;
// let s2=true;
// let res1=s1+s2;
// console.log(s1+s2, typeof res1);  //11 'number'


// let n1="hello";
// let n2=10;
// let res3=n1+n2;
// console.log(n1+n2,typeof res3);  //hello10 string


// let n3="10";
// let n4="20";
// let res4=n3+n4;
// console.log(n3+n4, typeof res4);  //1020 string
















