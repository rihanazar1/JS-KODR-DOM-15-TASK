var box = document.querySelector(".box");

document.addEventListener("mousemove", (dets)=>{
    var color1 = Math.floor(Math.random()*255)
    var color2 = Math.floor(Math.random()*255)
    var color3 = Math.floor(Math.random()*255)

    box.style.backgroundColor = `rgb(${color1} ${color2} ${color3})`

    box.style.left = dets.x+"px";
    box.style.top = dets.y+"px";
})