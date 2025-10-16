// // async function vishal(){
// //     return  20;

// const { createElement } = require("react")

// // };

// // function vishal (){
// //     return new promise(function (resolve, reject){
// //         reject({})
// //     });
// // };
// // function vishal() {
// //     return new Promise(function(resolve, reject) {
// //         reject({ message: "The promise was rejected" });
// //     });
// // }
// // console.log( vishal())

//     async function vis(){
//     console.log("10")
//     console.log("10")
//     let res = await fetch('https://api.tvmaze.com/search/shows?q=girls')
//     console.log(res)
//     console.log("10")
// }
// vis()

// let setTime = setInterval(() => {
//     console.log("10")

// }, 2000);
// setTimeout(() =>{
//     clearInterval(setTime);
//     console.log("time is ok and interval is stop")
// }, 20000)
// console.log("101")
// console.log("102")
// console.log("103")

let studData = {
  firstNam: document.getElementById("firstName"),
  lastName: document.getElementById("lastName"),
  mobNum: document.getElementById("mobileNum"),
  rollNum: document.getElementById("rollNum"),
  emailId: document.getElementById("emailId"),
};
let button = document.getElementById("btn");

function getData() {
  //    console.log(`full name is ${firstName.value} ${lastName.value}`)
  //    console.log(`mobile number is ${mobNum.value} `)
  //    console.log(`rollNum is ${rollNum.value}`)
  //    console.log(`emailid is ${emailId.value}`)
  let table = document.createElement("tr");

  //     from student data feild loop data

  for (let data in studData) {
    let td = document.createElement("td");
    td.append(`${studData[data].value}`);
    table.appendChild(td);
  }
  console.log(table);

  let tBody = document.querySelector("#tbody");

  //    clear after get data
  // firstName.value =""
  // lastName.value =""
  // mobNum.value =""
  // rollNum.value =""
  // emailId.value =""
}

button.addEventListener("click", getData);

// let image =[
//     "https://images.unsplash.com/photo-1755398104149-961fa827e015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1757880555641-43535eae7add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
//     'https://images.unsplash.com/photo-1757966191895-f8f565b7eaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1759681770982-313332e7f42c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'
// ]

// let img = document.querySelector("img")

// let h=0;
// function slideshow(images) {
//   img.setAttribute('src', images[n]);
//   n = (n + 1) % images.length; // Loop back to start
// }

// setInterval(() => {
//   img.setAttribute('src', image[h]);
//   h = (h+1)%image.length
// }, 2000);

// function vishal(name, callback){
//     setTimeout(()=>{
//         const message = `hello ${name}`;
//         callback(message)
//         return message;
//     }, 2000)
// }

// function sayMas(message){
//     console.log(message)
// }
//  vishal('vishal', sayMas)

// function processNumbers(numbers, callback) {
// 	// write your code here
// 	const newArr =[];
// 	for (var i = 0; i < numbers.length; i++) {
// 	    newArr.push(callback(numbers[i]))
// 	}
// 	return newArr

// }

// function square(number) {
//     // Return the square of the number

//     return number*number
// }

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = processNumbers(numbers, square);
// console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]

// function simplePromiseDemo(success) {
//     // Return a Promise
//     return new Promise ((resolve, reject) => {

//     // Log "Promise is pending..."
//     console.log("promise is pending")

//     // Simulate a network request with setTimeout
//     setTimeout(()=>{
//         // promise =true;
//     if(success){
//         resolve ("Promise fulfilled: Data received!")
//     }else{
//         reject ("Promise rejected: Error occurred!")
//     }

//     },2000)

//     // Resolve or reject the Promise based on the success flag
//     })

// }

// simplePromiseDemo(false)
// // Demonstrate fulfilled state
// .then((message)=>{
//     console.log(message)
// })

// // Demonstrate rejected state
// .catch((err)=>{
//     console.log(err)
// })

/*function simplePromiseDemo(success) {
    // Return a Promise
    return new Promise((resolve, reject) => {
        // Log "Promise is pending..."
        console.log("Promise is pending...");
        
        // Simulate a network request with setTimeout
        setTimeout(() => {
            if (success) {
                // Resolve the Promise with a success message
                resolve("Promise fulfilled: Data received!");
            } else {
                // Reject the Promise with an error message
                reject("Promise rejected: Error occurred!");
            }
        }, 2000);
    });
}

// Example usage:
// Demonstrate fulfilled state
simplePromiseDemo(true)
    .then((message) => {
        // Handle success
        console.log(message);
    })
    .catch((error) => {
        // Handle error
        console.log(error);
    });

// Demonstrate rejected state
simplePromiseDemo(false)
    .then((message) => {
        // Handle success
        console.log(message);
    })
    .catch((error) => {
        // Handle error
        console.log(error);
    });*/

// function fetchUserData(success) {
//   // Return a Promise
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve(
//           {
//             id: 1,
//             name: "john Doe",
//           })
//       } else {
//         reject("data willl be failed");
//       }
//     }, 3000);
//   });

//   // Simulate a network request with setTimeout

//   // Resolve or reject the Promise based on the success flag
// }

// async function getUserData(success) {
//   // Try to call fetchUserData with await
//   try {
//     let userData = await fetchUserData(success);

//     // Log the user data if successful
//     console.log(userData);
//   } catch (err) {
//     console.log(err);
//   }

//   // Catch and log the error if the request fails
// }

// // Demonstrate successful request
// getUserData(true);

// // Demonstrate failed request
// getUserData(false);



// dom manupulation

// console.log(document.getElementsByTagName('input'))
// let input1 = document.querySelectorAll('input')
let h1 = document.querySelector("h2")

// // h1.style.color= 'red'
// // h1.style.background= 'blue'
// // h1.style.border= '4px solid red'

// // h1.style.cssText= `color:red; background:blue; border:2px solid black`
// console.log(h1.innerText ="hello world")
// console.log(h1.innerHTML = "hello dear")
// console.log(h1.setAttribute('class', ' border'))

let img = document.querySelector("img")

let imgfol = [
  'https://images.unsplash.com/photo-1758565811145-619f5e20f196?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=436',
  'https://plus.unsplash.com/premium_photo-1729412405215-57501267da3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435',
  'https://images.unsplash.com/photo-1758801305053-97e7e20fee3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=431',
  'https://images.unsplash.com/photo-1758944967067-bf0177898364?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
  'https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80',
  'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
  'https/images.unsplash.com/photo-1759852909538-57985f691821?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=0'
]
 
let imgFol = [
    "image is corrupted or link is not exact "
]

let n = 0;
function checkImageUpdate (src) {
let testImage = new Image();
testImage.onload =()=>{
    img.src = src;
    img.alt = ''//image is valid then alt attribute is not in is use
};
testImage.onerror = ()=>{
    img.src =''//image link is not valid the alt is use
    img.alt = 'image is corrupted or link is invallid';
};
testImage.src = src;

}

setInterval(()=>{
    checkImageUpdate(imgfol[n])
    n= (n+1)%imgfol.length
}, 2000)
// setInterval(()=>{
//   img.setAttribute('alt',`${imgfol[n]}`)
//  n = (n+1)%imgfol.length
// }, 200)
// function slideshow(h){
//   img.setAttribute('src', `${h[n]}`)
//   n = (n+1)% h.length

// }

// setInterval(()=>{
// slideshow(imgfol)
// },200)
