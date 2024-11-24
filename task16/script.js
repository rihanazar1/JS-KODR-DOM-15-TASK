var images = document.querySelectorAll(".images")
let modalImg = document.querySelector(".modal-img");
let modal = document.querySelector(".modal");
images.forEach((img)=>{
    img.addEventListener("click",()=>{
    modalImg.src = img.src;
    modal.style.display = "flex";
})
})
modal.addEventListener("click",()=>{
    modal.style.display = "none";
});