"use strict";

let elem = document.querySelector(".mob-nav");
let elem2 = document.querySelector(".mob-nav-list")
let fon = document.querySelector(".fon-menu");
elem.addEventListener("click" , function(){
    elem2.hidden = !elem2.hidden;
    fon.hidden = !fon.hidden;
})