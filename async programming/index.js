"use strict";
/*
//********************SYNCHRONOUS PROGRAMMING*********************/

// function firstTask() {
//     console.log("Task 1");
// };

// function secondTask() {
//     console.log("Task 2");
// };

// function thirdTask() {
//     console.log("Task 3");
// };

// firstTask();
// secondTask();
// thirdTask();


// //BLOCKING / FREEZING
// function someLongRunningFunction() {
//     let start = Date.now();
//     while( Date.now() - start < 5000) {
//         //code to execute
//     }
//     return "Hello";
// };

// console.log("Starting..."); //Logged first

// let result = someLongRunningFunction();
// console.log(result); //Waits 5 seconds before logging "Hello"

// console.log("...Finishing"); //Logged only after "Hello" has been logged


//********************ASYNCHRONOUS PROGRAMMING*********************/

// console.log("Start of script");  //Logged first

// setTimeout(function() {
//     console.log("First timeout completed!"); //Waits 2 seconds before loggin to console
// }, 2000);

// console.log("End of script"); //Logged before setTimeout is completed



//********************CALLBACK FUNCTIONS*********************/

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = {name: "Bhabha", age: 28};
//         callback(data);
//     }, 3000);
// };

// fetchData(function(data) {
//     console.log(data);
// });

// console.log("Data is being fetched...");


//**************CALLBACK HELL***************/
// getData(function(a){
//     getMoreData(a, function(b){
//       getEvenMoreData(b, function(c) {
//         getEvenEvenMoreData(c, function(d) {
//           getFinalData(d, function(finalData) {
//             console.log(finalData);
//           });
//         });
//       });
//     });
//   });

//***********************PROMISES****************************/

//****CREATING A PROMISE*****/
// let myPromise = new Promise(function (resolve, reject){});
// console.log(myPromise);

// let myPromise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve("The promise says 'Hello!'");
//     }, 2000);
// });
// console.log(myPromise);


//****CONSUMING A PROMISE*****/
// myPromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Fulfilled or rejected, the promise has been settled")
// });


//****CHAINING PROMISES*****/
// fetch("http://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => processData(data))
// .then(processedData => {
//     console.log(processedData);
// })
// .catch(error => console.log(error));

// function processData(data) {
//     // Example function to process data
//     return data.map(user => ({
//       id: user.id,
//       name: user.name,
//       email: user.email
      
//     }))
//   };

//***********************ERROR HANDLING****************************/

// fetch("https://api.github.com/users/octocat")
// .then( (response) => response.json())
// .then( (data) => {
//     try {
//         //processing received data
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })
// .catch( (error) => console.log(error));


//**********************PROMISE.ALL METHOD****************************/

// let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
// let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
// let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

// Promise.all([promise1, promise2, promise3])
// .then( (values) => {
//     console.log(values);
// });


//**********************ASYNC/AWAIT FUNCTIONS****************************/
// async function getData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let data = await response.json();
//     console.log(data);
//   }
//   getData();*/
