"use strict";

const input = document.querySelectorAll("#input_search");

function MakeAhit(Input_value  , href , arrArguments){
    if(arrArguments.includes(Input_value)){
      input.forEach((item) => {item.insertAdjacentHTML("afterend", `<a class='find-items' href="${href}">${arrArguments.find(item => item.includes(Input_value))}</a>`)});
    }
}

input.forEach(function(item){
    item.addEventListener("focus" , function(){
        item.closest("li").classList.add("fon-search");
    })
    document.querySelector(".main").addEventListener("mouseover" , function(){
        item.closest("li").classList.remove("fon-search");
        document.querySelectorAll(".find-items").forEach((items) => {items.remove()});
    })

    item.addEventListener("input" , function(){
        MakeAhit(item.value , "site.com" ,["string1" , "string2"])
    })
})