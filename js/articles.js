"use strict";

const element = document.querySelector(".articles");
element.addEventListener("click" , function(event){
    let target = event.target;
    if(target.classList.contains("articles")) return;
   let obj = {
        title:target.textContent,
        page: target.getAttribute('value') 
    }
    localStorage.setItem('data',JSON.stringify(obj));
    location.href = "file:///C:/Users/sahar/Desktop/Home/article.html";
})