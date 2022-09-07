"use strict";

document.querySelectorAll("._choice_").forEach(function(items){
    items.addEventListener("click" , function(event){
        if(event.target.textContent.includes("Sing")) localStorage.setItem("data-sing" , JSON.stringify({type: event.target.textContent}));
    })
})