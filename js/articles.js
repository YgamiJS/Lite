"use strict";

const element = document.querySelector(".articles");
element.addEventListener("click" , function(event){
    let target = event.target;

    if(target.classList.contains("articles")) return;
    alert(target.textContent)
})