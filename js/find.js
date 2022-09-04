"use strict";
//капец тут
let input = document.querySelector("#search-question"); 

input.addEventListener("input" , function(){
    document.querySelectorAll(".question").forEach(function(item){
        if(new RegExp(`${item.getAttribute('value')}` , "gi").test(input.value)) item.style.cssText = `background-color: white; color: black;`; else  item.style.display = "none";
    })
})

input.addEventListener("blur" , function(){
    document.querySelectorAll(".question").forEach(function(elem){
        if(elem.style.display == "none") elem.style.display = "";
    })

})
