"use strict";

import { loadPage } from "./LoremText.js";

loadPage("question" , "pageValue");

document.querySelector(".list-question").addEventListener("click" , function(event){
    if(event.target.classList.contains("list-question")) return;
    localStorage.setItem("data-question" , JSON.stringify({ title:  event.target.getAttribute("value") , page: event.target.getAttribute("pageValue")}));
    location.href = "https://ygamijs.github.io/Lite/question.html";
})