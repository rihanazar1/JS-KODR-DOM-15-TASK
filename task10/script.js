const box = document.querySelector(".box");
const btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click", function(){
      if(flag === 0 ){
        box.style.backgroundColor = "yellow";
        flag = 1;
      }else {
        box.style.backgroundColor = "black";
        flag = 0;
      }
});