"use strict";

const input = document.querySelector("#input_search");

function MakeAhit(Input_value  , href , arrArguments){
    if(arrArguments.includes(Input_value)){
      input.insertAdjacentHTML("afterend", `<a class='find-items' href="${href}">${arrArguments.find(item => item.includes(Input_value))}</a>`);
    }
}
input.addEventListener("focus" , function(){
    input.closest("li").classList.add("fon-search");

    document.querySelector(".fon-search").addEventListener("mouseout" , function(){
        document.querySelector(".fon-search").classList.remove("fon-search");
        document.querySelectorAll('.find-items').forEach((item) => item.remove());
        input.value = '';
    })
})

input.addEventListener("input" , function(){
    MakeAhit(input.value , "https://ygamijs.github.io/Lite/" , `добро пожаловать в Lite! lite - сайт вопросов - ответов , а также статей и много другого. здесь вы сможите задать интересующий вас вопрос и тут же получить ответ на него , также вы можете читать написанные статьи на интересующие вас темы и писать свои.`.split(" "));
})