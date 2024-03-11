// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";
// -----------------------------------------------------------------------------------------------------

// let myNum = 20;
// if(myNum % 2 == 0)
// {
//     alert("Even Number");
// }
// else {
//     alert("Odd Number");
// }
// -----------------------------------------------------------------------------------------------------


// function sumOfNumbers(n1, n2) {
//     return n1 + n2;
// }
// alert(sumOfNumbers(25, 2));
// alert(sumOfNumbers(26, 2));
// alert(sumOfNumbers(27, 2));

// function ClickBody() {
//     alert("Ouch! Stop poking me!");
//   }
// document.querySelector("html").addEventListener("click", ClickBody);


// document.querySelector("html").addEventListener("click", ()=>{
//     alert("ouchhh!")
// });

// -----------------------------------------------------------------------------------------------------
// const myImg = document.getElementById("image-container");
// // const myImg = document.querySelector("img");
// // console.log(`image Attribute : ${myImg}`);
// const myHead = document.getElementById("heading-container");

// myImg.onclick = () => {
//     const mySrc = myImg.getAttribute("src");
//     // console.log(`image Attribute : ${mySrc}`);
//     //  console.log(`head Attribute : ${myHead}`);
//     // console.log(`style Attribute : ${myStyle.getAttribute("background-color")}`);
    
//     if(mySrc === "/task-9-javascript/learning-javascript/images/fundamentals.svg") {
//         myImg.setAttribute("src", "/task-9-javascript/learning-javascript/images/react.svg");
//         myHead.textContent = "Image React";
//         myHead.style.color = "red";
//     } 
//     else {
//         myImg.setAttribute("src", "/task-9-javascript/learning-javascript/images/fundamentals.svg");
//         myHead.textContent = "Image Fundamentals";
//         myHead.style.color = "blue";
//     }
// };
// -----------------------------------------------------------------------------------------------------

// let myButton = document.querySelector("button");
// let myHeading = document.getElementById("name-heading");

// function setUserName() {
//     const myName = prompt("Please enter your name: ");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = localStorage.getItem("name");
// }

// myButton.onclick = ()=>{
//     setUserName();
// };

// -----------------------------------------------------------------------------------------------------
