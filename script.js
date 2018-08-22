 /*
          Project 01_06_02

          Author: Annie Thompson
          Date: 8-16-18

          Filename: script.js
       */

 "use strict";

 var formValidity = true;

 // function to validate required fields
 function validateRequired() {
     // support variables for validation
     var inputElements = document.querySelectorAll("#contactinfo input");
     var errorDiv = document.getElementById("numErrorText");
     var fieldsetValidity = true;
     var elementCount = inputElements.length;
     var currentElement;

     // try catch to handle a loop through the fields
     try {
         // loop through input fields looking for blanks
         for (var i = 0; i < elementCount; i++) {
             currentElement = inputElements[i];
             //blanks
             if (currentElement.value === "") {
                 currentElement.style.background = "rgb(255,233,233)";
                 fieldsetValidity = false;
             } else {
                 currentElement.style.background = "white";
             }
         }

         if (fieldsetValidity === false) {
             throw "Please complete all Personal Information."
         } else {
             errorDiv.innerHTML = "none";
             errorDiv.style.display = "";
         }
     } catch (msg) {
         errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
     }
 }


 // function to validate form on submit event
 function validateForm(evt) {
     if (evt.preventDefault) {
         evt.preventDefault();
     } else {
         evt.returnValue = false;
     }
     formValidity = true;

     validateRequired();

     // results of validation tests
     if (formValidity === true) {
         document.getElementById("errorText").innerHTML = "";
         document.getElementById("errorText").style.display = "none";
         document.getElementsByTagName("form")[0].submit();
     } else {
         document.getElementById("errorText").innerHTML = "Please fix the indicated problems.";
         document.getElementById("errorText").style.display = "block";
         scroll(0, 0);
     }
 }

 // function to create our event listeners
 function createEventListeners() {
     // event listener for submit
     // event handeler validateForm() 
     if (window.addEventListener) {
         window.addEventListener("submit", validateForm, false);
     } else if (window.attachEvent) {
         window.attachEvent("onsubmit", validateForm);
     }
 }

 // add a load event listener
 //event handler will be createEventListeners()

 if (window.addEventListener) {
     window.addEventListener("load", createEventListeners, false);
 } else if (window.attachEvent) {
     window.attachEvent("onload", createEventListeners);
 }
