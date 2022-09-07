"use strcit";

if(localStorage.getItem("data-user")){
    document.querySelectorAll(".sing").forEach((items) => {
        items.remove();
    })
    document.querySelectorAll("._choice_").forEach((items) => {
        items.insertAdjacentHTML( "beforeend" , `<li class="items"><a href="">${JSON.parse(localStorage.getItem("data-user")).UserName}</a></li>`);
    })
}