"use strict";

import { loadPage } from "./LoremText.js";

loadPage("question" , "pageValue");

document.querySelector(".question").addEventListener("click" , function(event){
    if(event.target.classList.contains("question")) return;
    localStorage.setItem("data-question" , { title:  event.target.getAttribute("value") , page: event.target.getAttribute("pageValue")})
    location.href = "https://ygamijs.github.io/Lite/question.html";
})