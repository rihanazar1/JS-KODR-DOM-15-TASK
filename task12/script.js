var image = document.querySelector("img");
var body =  document.querySelector("body")
var circle = document.querySelector(".circle")


var moveX = 0;
var moveY = 0;
body.addEventListener("keydown",function(dets){
    
    if(dets.code == "ArrowLeft"){
        moveX -= 10
        console.log(moveX);
    } else if(dets.code == "ArrowRight"){
        moveX += 10
        console.log(moveX);
        
    }else if(dets.code == "ArrowUp"){
        moveY -= 10
        console.log(moveY);
    }else if(dets.code == "ArrowDown"){
        moveY += 10
        console.log(moveY);
        
    };

    image.style.left = moveX +"px"
    image.style.top = moveY +"px"

    if(moveX>220 && moveY>100){
        image.style.opacity = "30%";
    } else {
        image.style.opacity = 1;
    }
});

