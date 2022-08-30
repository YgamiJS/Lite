"use strict";

document.addEventListener("DOMContentLoaded" , function(){
    let heading = document.getElementById("heading");
    let page = document.getElementById("content-page");

    heading.textContent  = JSON.parse(localStorage.getItem("data")).title;
    document.title = JSON.parse(localStorage.getItem("data")).title;

    page.textContent = JSON.parse(localStorage.getItem("data")).page;

    localStorage.removeItem("data");
})