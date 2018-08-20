 /*
        Project 01_06_01

        Author: Annie Thompson
        Date: 8-16-18

        Filename: script.js
     */

//*** DO NOT HAVE EXPLORER 8, CANNOT TEST***

 "use strict";
 // global variable
 var formValidity = true;

 // function to validate all the required fields
 function validateRequired() {
     var inputFields = document.querySelectorAll("#contactinfo input");
     var errorMessage = document.getElementById("errorText");
     var fieldsetValidity = true;
     var elementLength = inputFields.length;
     var currentElement;

     try {
         for (var i = 0; i < elementLength; i++) {
             currentElement = inputFields[i];
             // for the blank fields
             if (currentElement.value === "") {
                 currentElement.style.background = "rgb(255,233,233)";
                 fieldsetValidity = false;
             } else {
                 currentElement.style.background = "white";
                 errorMessage.style.display = "none"
             }
             }
             if (fieldsetValidity === false) {
                 throw "Please complete your personal info.";
             }
         
     } catch (msg) {
         errorMessage.style.display = "block";
         errorMessage.innerHTML = msg;
         formValidity = false;
     }
 }

// function to prevent the form from submitted on default
 function validateForm(submit) {
     
     if (submit.preventDefault) {
         submit.preventDefault();
     } else {
         submit.returnValue = false;
     }
     formValidity = true;
     validateRequired();

     if (formValidity === true) {
         document.getElementsByTagName("form")[0].submit();
     }
 }

 // function to create event listeners for the form
 function createEventListeners() {
    
     var form = document.getElementsByTagName("form")[0];
     if (form.addEventListener) {
         form.addEventListener("submit", validateForm, false);
     } else if (form.attachEvent) {
         form.attachEvent("onsubmit", validateForm);
     }
 }

 // event listeners for window when it loads
 if (window.addEventListener) {
     window.addEventListener("load", createEventListeners, false);
 } else if (window.attachEvent) {
     window.attachEvent("onload", createEventListeners);
 }
