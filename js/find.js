"use strict";
let input1 = document.querySelector("#search-question"); 

input1.addEventListener("input" , function(){
    document.querySelectorAll(".question").forEach(function(item){
        if(new RegExp(`${item.getAttribute('value')}` , "gmi").test(input1.value)) item.style.cssText = `background-color: white; color: black;`; else  item.style.display = "none";
    })
})

input1.addEventListener("change" , function(){
    document.querySelectorAll(".question").forEach(function(elem){
        elem.style.cssText = ""; // add .quetion
    })
})