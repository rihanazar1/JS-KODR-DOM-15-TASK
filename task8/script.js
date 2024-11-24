const box = document.querySelector("box");
const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let position1 = Math.floor(Math.random()*85);
    let position2 = Math.floor(Math.random()*85);

    box.style.top= "`${position1}%`";
    box.style.left= "`${position1}%`";
})