"use strict";

document.querySelector(".articles").addEventListener("click" , function(event){
    if(event.target.classList.contains("articles")) return;
    localStorage.setItem('data',JSON.stringify({title:event.target.textContent || "Что - то пошло не так :(",page: event.target.getAttribute('value') || "Что - то пошло не так :(" }));
    location.href = "file:///C:/Users/sahar/Desktop/Home/article.html";
})