"use strict";
function GetDate(title , page , data  , other){
document.addEventListener("DOMContentLoaded" , function(){
    document.querySelector(title).textContent = document.title =  JSON.parse(localStorage.getItem(data)).title;
    document.querySelector(page).textContent = JSON.parse(localStorage.getItem(data)).page;
    if(other) document.querySelector(other).textContent = JSON.parse(localStorage.getItem(data)).answerValue;
    localStorage.removeItem(data);
})}

GetDate("#heading" , "#content-page" , "data");

export {GetDate};