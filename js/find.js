"use strict";
let input = document.querySelector("#search-question"); 

input.addEventListener("input" , function(){
    document.querySelectorAll(".question").forEach(function(item){
        if(new RegExp(`${item.getAttribute('value')}` , "gmi").test(input.value)) item.style.cssText = `background-color: white; color: black;`; else  item.style.display = "none";
    })
})

input.addEventListener("change" , function(){
    document.querySelectorAll(".question").forEach(function(elem){
        elem.style.cssText = "";
    })
})