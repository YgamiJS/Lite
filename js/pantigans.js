"use strict";
import {loadPage} from "./LoremText.js";

document.querySelector(".pagitation").addEventListener("click" , (event)=>{
    if(event.target.classList.contains("pagitation")) return;
    event.target.onclick = document.querySelector(".articles").querySelectorAll(".items").forEach((items)=> items.remove());
    alert(event.target.textContent)
    for(let i = 0; i <= 57; i++){
        document.querySelector(".articles").insertAdjacentHTML("beforeend" , `<div class='items'>${event.target.textContent}</div>`)
        loadPage();
    }
});