"use strict";

const changeData = function(data , itemForChange){
   data === "UserName" ? localStorage.setItem("data-user" , JSON.stringify({UserName: itemForChange , PassWord:  JSON.parse(localStorage.getItem("data-user")).PassWord })) : localStorage.setItem("data-user" , JSON.stringify({UserName: JSON.parse(localStorage.getItem("data-user")).UserName , PassWord: itemForChange }))
}
const UserName = document.querySelector(".user-info h3");
const ButtonChangePass = document.querySelector(".user-info button");
UserName.textContent =  JSON.parse(localStorage.getItem("data-user")).UserName;
UserName.addEventListener("click" , () => changeData("UserName" , prompt()))
ButtonChangePass.addEventListener("click" , () =>  changeData("PassWord" , prompt() )); // alert(JSON.parse(localStorage.getItem("data-user")).PassWord) 