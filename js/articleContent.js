"use strict";

document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById("heading").textContent = document.title =  JSON.parse(localStorage.getItem("data")).title;
    document.getElementById("content-page").textContent = JSON.parse(localStorage.getItem("data")).page;
    localStorage.removeItem("data");
})