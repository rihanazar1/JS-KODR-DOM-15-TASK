// // let a = 2;
// for(let i = 1; i <= 21; i++){
//     console.log("apna");
// }

// for(count=1; count<=5; count++){
//     console.log("Apna");
// }

// for(i=2; i<=21; i=i+2){
//     console.log(i)
// }

// let sum = 0;
// for(i=1; i<=5; i++){
//     sum = sum+i;
// }
// console.log(sum);

// let i=2
// while(i<=21){
//     console.log(i);
//     i=i+2
// }

// let a=4;
// while(a<41){
//     console.log(a)
//     a=a+4
// }

// for(i=0;i<=101;i=i+2){
//     console.log(i);
// }

// function printOddnum(){
//     let enternum = prompt("Enter Your Number");
//     for (enternum=0; enternum<=20; enternum++){
//     if(enternum%2 ==1){
//         console.log(enternum);
//     }
// }
// }

// const mul = (a,b)=>{
//     console.log(a*b);
// }

// mul(2,4);

// function vowels(str){
//     let count =0;
//     for(const char of str){
//         if(char ==="a" || char ==="e" || char ==="i" || char==="o" || char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// vowels("rihanazhar");


// let nums = [2,3,4,5];

// nums.forEach((num)=>{
//     console.log(num*num);
// })

// const student = {            
//     name: "rihan",
//     age: '24',
//     cgpa: 100,
// };

// console.log(student["age"])


// let arr = ["list", "Tupple", "Sets", "Dictonary"]

// arr.forEach(function(value,idx,array){
//     console.log(value+ " "+idx+" "+array)
// });

// const arrow = (a,b)=>{
//     console.log(a+b)
// };

// arrow(2,1)

// const vari = (a,b) => {
//     console.log(a+b);
// }

// vari(2,5)

// console.log("1");
// console.log("2");
// setTimeout(function(){
//     console.log("4");
// }, 2000)
// console.log("3");

// const aro = (a,b)=>{
//   console.log(a+b)
// }

// aro(2,5)


// var ans = new Promise(function(res, rej){
//     return res("sabse phele ghar pr aao")
// });

// var p2 = ans.then(function(data){
//     console.log(data)
//     return new Promise(function(res, rej){
//         return res("gate kholo or lgao")
//     })
// });

// p2.then(function(data){
//     console.log(data);
// });

// function sum (num1,num2){
//    sum = num1 + num2;
//    return
// }

// let a = sum;
// console.log(sum);

// const circle = document.querySelector(".circle")
// const btn = document.querySelector("button")

// const flag = 0;

// btn.addEventListener("click", function(){
//    if(flag === 0){
//       circle.style.backgrounColor = "yellow"
//    }
// })



// const h1 = document.querySelector('.box1 h1')

// h1.addEventListener("click",function(){
//    h1.style.color= "red"
//    h1.style.backgroundColor = "black" 
//    h1.textContent= "changed"
// })



// const btn = document.querySelector("button")

// btn.addEventListener("click",function(){
//    var div = document.createElement("div");
//    div.style.height = "100px";
//    div.style.width = "100px";
//    div.style.backgroundColor = "yellow";
//    div.style.margin = "10px";
//    document.body.appendChild(div);
// })


// const h1 = document.querySelector("h1")

// h1.addEventListener("mouseover", function(){
//    h1.style.fontSize= "50px"
// })

// h1.addEventListener("mouseleave", function(){
//    h1.style.fontSize= "20px"
// })


// const img = document.querySelector("img")
// const h1 = document.querySelector("h1")

// img.addEventListener("mouseover", function(){
//    img.style.backgroundColor = "green"

// })

// img.addEventListener("mouseleave", function(){
//    img.style.backgroundColor = "#fff"
// })


const box = document.querySelector(".box")

box.addEventListener("click", function(){
   var value1 = Math.floor(Math.random() * 255);
   var value2 = Math.floor(Math.random() * 255);
   var value3 = Math.floor(Math.random() * 255);
   box.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3} )`
})