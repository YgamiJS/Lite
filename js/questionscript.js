"use strict";

import { loadPage } from "./LoremText.js";

loadPage("question" , "pageValue");
loadPage("question" , "answerValue")

document.querySelector(".list-question").addEventListener("click" , function(event){
    if(event.target.classList.contains("list-question")) return;
    localStorage.setItem("data-question" , JSON.stringify({ title:  event.target.getAttribute("value") || event.target.closest(".question").getAttribute("value") , page: event.target.getAttribute("pageValue")  || event.target.closest(".question").getAttribute("pageValue") , answerValue: event.target.getAttribute("answerValue") || event.target.closest(".question").getAttribute("answerValue")}));
    location.href = "https://ygamijs.github.io/Lite/question.html";
})