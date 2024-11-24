const heart = document.querySelector("i");

heart.addEventListener("dblclick",function(){
    heart.style.fontSize = "10rem";
    setTimeout(function() {
        heart.style.fontSize = "3rem";
      },1000); 
}); 






