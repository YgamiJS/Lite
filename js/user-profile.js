"use strict";

document.querySelector(".user-info").querySelector("h3").textContent =  JSON.parse(localStorage.getItem("data-user")).UserName;