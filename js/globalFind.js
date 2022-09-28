"use strict";

document.querySelectorAll(".input_search").forEach((items) => {

    const ParentInput = items.closest("li");
    ParentInput.classList.add("fon-search");

    const MakeAhit = function(Input_value  , href , arrArguments){
        if(arrArguments.includes(Input_value)){
          items.insertAdjacentHTML("afterend", `<a class='find-items' href="${href}">${Input_value}</a>`);
        }
    }
    items.addEventListener("focus" , function(){
        ParentInput.addEventListener("pointerout" , function(event){
            if(!event.relatedTarget.closest(".fon-search")){
                document.querySelectorAll('.find-items').forEach((itemo) => itemo.remove());
                items.blur();
                items.value = '';
            }
        })
    })
    
    items.addEventListener("input" , function(){
        MakeAhit(items.value , "https://ygamijs.github.io/Lite/" , `добро пожаловать в Lite! lite - сайт вопросов - ответов , а также статей и много другого. здесь вы сможите задать интересующий вас вопрос и тут же получить ответ на него , также вы можете читать написанные статьи на интересующие вас темы и писать свои.`.split(" "));
    })
})