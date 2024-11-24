const img = document.querySelector("img");
const btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click", function(){
    if(flag === 0){
        img.style.opacity = "10%";
        img.style.border = "10px solid black";
        flag = 1;    
    } else {
        img.style.opacity = "100%";
        img.style.border = "10px solid black";
        flag=0;
    }
    })