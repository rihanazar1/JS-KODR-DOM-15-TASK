var box = document.querySelector(".box");

document.addEventListener("mousemove", function(dets){
    box.style.left = dets.x+"px"
    box.style.top = dets.y+"px"
});