"use strict";
//*************SUMMARY: SYNTAX**************
// // // webStorageObject.setItem("key", "value");
// // // webStorageObject.key(index);
// // // webStorageObject.getItem(key);
// // // webStorageObject.length;
// // // webStorageObject.removeItem(key);
// // // webStorageObject.clear();


//*********************SET ITEM METHOD / BUILT-IN INTERFACE**********************/

//**********HOW TO ACCESS SESSION & LOCAL STORAGE OBJECTS************/
// //Three ways to do the same thing:
// sessionStorage.bestColor = "Green";
// sessionStorage["bestColor"] = "Green";
// sessionStorage.setItem("bestColor", "Green"); //NB: Best practice

// console.dir(sessionStorage);

//**********EXAMPLE 1: STORE DATA IN SESSION STORAGE OBJECT************/
// sessionStorage.setItem("color", "Pink");
// console.log("Session Storage: ", sessionStorage);


//**********EXAMPLE 2: STORE DATA IN LOCAL STORAGE OBJECT************/
// localStorage.setItem("color", "Blue");
// console.log("Local Storage: ", localStorage);


//**********EXAMPLE 3: NON-SERIALIZED OBJECTS IN WEB STORAGE************/
// sessionStorage.setItem("myBio", {name: "Bhabha"}); //Results: [object Object]
// console.log(sessionStorage);


//**********EXAMPLE 4: STORE SERIALIZED OBJECTS IN WEB STORAGE************/
// sessionStorage.setItem("myBio", JSON.stringify({name: "Bhabha"}));
// console.log(sessionStorage);


//*******************************KEY METHOD / BUILT-IN INTERFACE************************/

//**********EXAMPLE 1: GET NAME OF ITEM IN SESSION STORAGE OBJECT************/
// sessionStorage.setItem("carColor", "Black");
// sessionStorage.setItem("pcColor", "Silver");
// sessionStorage.setItem("laptopColor", "White");
// console.log("Session Storage: ", sessionStorage);
// console.log("Index 0: ", sessionStorage.key(0));
// console.log("Index 1: ", sessionStorage.key(1));
// console.log("Index 2: ", sessionStorage.key(2));
// console.log("Index 3: ", sessionStorage.key(3));
// console.log("Index 4: ", sessionStorage.key(4));


//**********EXAMPLE 2: GET NAME OF ITEM IN LOCAL STORAGE OBJECT************/
// localStorage.setItem("carColor", "Black");
// localStorage.setItem("pcColor", "Silver");
// localStorage.setItem("laptopColor", "White");
// console.log("Local Storage: ", localStorage);
// console.log("Index 0: ", localStorage.key(0));
// console.log("Index 1: ", localStorage.key(1));
// console.log("Index 2: ", localStorage.key(2));
// console.log("Index 3: ", localStorage.key(3));



//*******************************GET ITEM METHOD / BUILT-IN INTERFACE************************/

//**********EXAMPLE 1: GET DATA FROM SESSION STORAGE OBJECT************/
// let sessionItem = sessionStorage.getItem("color");
// console.log("Session Storage Color: ", sessionItem);


//**********EXAMPLE 2: GET DATA FROM LOCAL STORAGE OBJECT************/
// let localItem = localStorage.getItem("color");
// console.log("Local Storage Color: ", localItem);


//*******************************WEB STORAGE LENGTH PROPERTY************************/

//**********EXAMPLE 1: VERIFY NUMBER OF ITEMS IN SESSION STORAGE OBJECT************/
// console.log("Session Storage Length = ", sessionStorage.length);


//**********EXAMPLE 2: VERIFY NUMBER OF ITEMS IN LOCAL STORAGE OBJECT************/
// console.log("Local Storage Length = ", localStorage.length);


//*******************************REMOVE ITEM METHOD / BUILT-IN INTERFACE************************/

//**********EXAMPLE 1: REMOVE DATA FROM SESSION STORAGE OBJECT************/
// sessionStorage.removeItem("pcColor");
// console.log(sessionStorage.getItem("pcColor")); //returns null


//**********EXAMPLE 2: REMOVE DATA FROM LOCAL STORAGE OBJECT************/
// localStorageStorage.removeItem("pcColor");
// console.log(localStorageStorage.getItem("pcColor")); //returns null


//*******************************WEB STORAGE CLEAR METHOD************************/

//**********EXAMPLE 1: CLEAR ALL ITEMS FROM SESSION STORAGE OBJECT************/
// sessionStorage.clear();
// console.log("Session Storage: ", sessionStorage);


//**********EXAMPLE 2: CLEAR ALL ITEMS FROM LOCAL STORAGE OBJECT************/
// localStorage.clear();
// console.log("Local Storage: ", localStorage);

//----------------------------------------------------------------------------------


//*******************************TODO LIST APP*******************************/

// import './index.css';
//SESSION STORAGE JS OBJECTS
let sessionTodosContainer = document.getElementById('session-storage-todos-container');
let sessionInputEle = document.getElementById('session-storage-todo-input-ele');
let sessionAddTaskBtn = document.getElementById('session-storage-add-task-btn');

//LOCAL STORAGE JS OBJECTS
let localTodosContainer = document.getElementById("local-storage-todos-container");
let localInputEle = document.getElementById("local-storage-todo-input-ele");
let localAddTaskBtn = document.getElementById("local-storage-add-task-btn");


function createTodoLiElements(todoArray, storageType) {
    return todoArray.map((item, index) => {
        let liElement = document.createElement('li');
        let checkboxEle = document.createElement('input');
        let labelEle = document.createElement('label');

        checkboxEle.setAttribute('type', 'checkbox');
        checkboxEle.setAttribute('id', `${storageType}-chbx-${index}`);
        labelEle.setAttribute('for', `${storageType}-chbx-${index}`);

        checkboxEle.addEventListener('click', (e) => {
            let todoArr = JSON.parse(
                storageType === "session" ? sessionStorage.getItem('codesweetlyStore') : localStorage.getItem("codesweetlyStore"));

            //NOTE:  string.split(separator, limiter) i.e. creates a substring
            todoArr[e.target.getAttribute('id').split('-')[2]].checked = !todoArr[e.target.getAttribute('id').split('-')[2]].checked;

            if (storageType === "session") {
                sessionStorage.setItem("codesweetlyStore", JSON.stringify(todoArr));
            } else {
                localStorage.setItem("codesweetlyStore", JSON.stringify(todoArr));
            }
            labelEle.classList.toggle('todo-task-done');
        });

        labelEle.textContent = item.text;
        liElement.append(checkboxEle, labelEle);
        return liElement;

    });
}

window.addEventListener('load', () => {
    //Get existing session storage content or return empty array
    let sessionTodoArray = JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
    let localTodoArray = JSON.parse(localStorage.getItem("codesweetlyStore")) || [];

    console.log(sessionTodoArray);
    console.log(localTodoArray);

    //Create li elements
    let sessionTodoLiElements = createTodoLiElements(sessionTodoArray);
    let localTodoLiElements = createTodoLiElements(localTodoArray);
    //Populate task display container with the li elements
    sessionTodosContainer.replaceChildren(...sessionTodoLiElements);
    localTodosContainer.replaceChildren(...localTodoLiElements);
});


//SESSION STORAGE ADD TASK BUTTON
sessionAddTaskBtn.addEventListener('click', () => {
    // Get existing session storage's content, if any. Otherwise, return an empty array:
    let currentTodoArray = JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
    // Merge currentTodoArray with the user's new input:
    let newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: sessionInputEle.value },
    ];
    // Add new To do Array
    sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));
    let todoLiElements = createTodoLiElements(newTodoArray);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    sessionInputEle.value = '';
});


//LOCAL STORAGE TASK BUTTON
localAddTaskBtn.addEventListener("click", () => {
    let currentTodoArray = JSON.parse(localStorage.getItem("codesweetlyStore")) || [];
    let newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: localInputEle.value }
    ];
    localStorage.setItem("codesweetlyStore", JSON.stringify(newTodoArray));
    let todoLiElements = createTodoLiElements(newTodoArray);
    localTodosContainer.replaceChildren(...todoLiElements);
    localInputEle.value = "";
});


//BONUS EXERCISE

console.log("Session Storage Length: \n", sessionStorage.length);

console.log("Local Storage Index 0: \n", localStorage[0]);

// sessionStorage.clear();

