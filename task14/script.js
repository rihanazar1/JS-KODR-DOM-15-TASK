var image = document.querySelector("img");
var body = document.querySelector("body");

var axisX = 0;
var axisY = 0;
body.addEventListener("keydown", (dets)=>{
if(dets.code == "ArrowLeft"){
    axisX -= 10
} else if (dets.code == "ArrowRight"){
  axisX += 10
} else if (dets.code == "ArrowUp"){
    axisY -= 10
} else if (dets.code == "ArrowDown"){
    axisY += 10
} 

image.style.left = axisX + "px"
image.style.top = axisY + "px"
})