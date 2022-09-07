"use strict";

document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById("form-button").textContent = document.title = JSON.parse(localStorage.getItem("data-sing")).type;
})