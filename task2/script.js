let arr = ["shoyeb", "Anish", "Rihan", "Muhib", "cintu"]

const h1 = document.querySelector("h1")
const btn = document.querySelector("button")
const h3 = document.querySelector("h3")

btn.addEventListener("click", function(){
    var winner = Math.floor(Math.random() * arr.length);   
    h3.textContent = arr[winner];
})