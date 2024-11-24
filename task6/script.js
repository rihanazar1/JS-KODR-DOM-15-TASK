
const box = document.querySelector(".box");

box.addEventListener("click", function(){
    let color1 = Math.floor(Math.random()*255);
    let color2 = Math.floor(Math.random()*255);
    let color3 = Math.floor(Math.random()*255);
    box.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
})
