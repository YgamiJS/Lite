"use strict";

const element = document.querySelector(".articles");
element.addEventListener("click" , function(event){
    if(event.target.classList.contains("articles")) return;
    localStorage.setItem('data',JSON.stringify({title:event.target.textContent,page: event.target.getAttribute('value') }));
    location.href = "file:///C:/Users/sahar/Desktop/Home/article.html";
})