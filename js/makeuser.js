"use strict";

document.getElementById("form-button").addEventListener("click" , function(){
    if(document.getElementById("form-button").textContent == "Sing up") localStorage.setItem( "data-user" , JSON.stringify({UserName: document.getElementById("form-UserName").value , PassWord: document.getElementById("form-PassWord").value})); else JSON.parse(localStorage.getItem("data-user")).UserName;
    localStorage.removeItem("data-sing");
    location.href = "../index.html";
})