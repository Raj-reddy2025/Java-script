// console.log(document);


//! by targeting using id

// let a =document.getElementById("heading")

// a.style.backgroundColor="red"
// console.log(a);


// let b=document.getElementsByClassName("heading-1")

// b[0].style.backgroundColor="green"
// b[1].style.backgroundColor="green"
// b[2].style.backgroundColor="green"

//! using foreach function to give styling and first convert html element into array
// Array.from(b).forEach(val=>{
//     val.style.backgroundColor="blue"
//     val.style.color="red"
// })

// console.log(b);


//! targeting by using tagname
// let h = document.getElementsByTagName("h1")

// h[1].style.backgroundColor="green"
// h[2].style.backgroundColor="green"
// h[4].style.backgroundColor="green"

// Array.from(h).forEach(val=>{
//       val.style.color="red"
// })
// console.log(h);





// let a = document.querySelector("h1")
// a.style.backgroundColor="green"

// let a = document.querySelector("#heading")
// a.style.backgroundColor="red"


// let a = document.querySelector(".heading-1")
// a.style.backgroundColor="yellow"

// let a = document.querySelectorAll("h1")
// a.forEach(val=>{
//     val.style.backgroundColor="blue"
// })

// console.log(a);


// let a = document.querySelectorAll("#heading")
// a.forEach(val=>{
//     val.style.backgroundColor="blue"
// })
// console.log(a);


// let a = document.querySelectorAll(".heading-1")
// a.forEach(val=>{
//     val.style.backgroundColor="grey"
// })
// console.log(a);



//! set attribute ()
// let a = document.getElementsByTagName("h1")
// a[0].setAttribute("id","heading1")

// console.log(a);

// a[1].setAttribute("class","heading-1")


//! update Attribute

// a[0].id="heading-2"
// a[1].className="heading-3"


//! delete attribute

// a[0].removeAttribute("id")
// a[1].removeAttribute("class")


// let ul = document.createElement("ul")
// ul.setAttribute("type","circle")
// ul.setAttribute("class","list")
// document.body.append(ul)

// let li1 = document.createElement("li")
// li1.style.color="blue"
// li1.innerText="HTML"
// ul.append(li1)




// let li2 = document.createElement("li")
// li2.style.color="red"
// li2.innerText="CSS"
// ul.append(li2)



// let li13= document.createElement("li")
// li3.style.color="blue"
// li3.innerText="Java Script"
// ul.append(li1)



// let li4= document.createElement("li")
// li4.style.color="aqua"
// li4.innerText="Frontend"
// ul.prepend(li4)




// let heading = document.getElementById("heading")

// // heading.textContent="welcome"
// heading.innerText="welcome"

//! inner html --- we can write html code directly

// div.innerHTML = `
// <ol type="i">
//     <li>Html</li>
//     <li>Css</li>
//     <li>JavaScript</li>
// </ol>
// `


//! difference between innerText,innerContent & innerHtml

// let div = document.getElementById("div")

// console.log(div.innerHTML); //! along with tags
// console.log(div.innerText); //! without tags
// console.log(div.textContent); //! side by side






// let h1 = document.createElement('h1')
// h1.innerText="hello"



//! append()===> we can add both node (html element) and string(text)
let d = document.getElementById("div")
// let h = document.getElementById("h")

let h1 = document.createElement("h1")
h1.innerText = "hello"

d.append(h1)

d.append("Hiiiiiiiiiii")




//!  append child()==> we can add only node (html) and we cannot add string(text)
 
d.appendChild(h1)

d.appendChild("hello")

d.remove()

d.removeChild()