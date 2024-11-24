const box = document.querySelector(".box");
const btn = document.querySelector("button");

let condition = 0;
btn.addEventListener("click", function(){
    if(condition === 0){
        box.style.height = "500px";
        box.style.width = "500px";
        condition = 1;
    } else {
        box.style.height = "100px";
        box.style.width = "100px";
        condition = 0;
    }
});




