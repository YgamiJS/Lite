"use strict";

let input = document.querySelector("#search-question"); 

input.addEventListener("input" , function(){
    let questions = document.querySelectorAll(".question");

    questions.forEach(function(item , index){

        if(new RegExp(`${item.getAttribute('value')}`).test(input.value)) item.style.backgroundColor = "white"; else  item.style.display = "none";
    })
})

input.addEventListener("blur" , function(){
    let questions = document.querySelectorAll(".question");
    
    questions.forEach(function(elem){
        if(elem.style.display == "none") elem.style.display = "";
    })

})