var bg = ["3AA6B9", "FF2171", "FF9EAA","A0C49D", "FF78C4", "9AC5F4","F1D4E5"];

document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
var num = Math.random();
num = num*7;
num=Math.floor(num);
var a = bg[num];
a="#"+a;
document.querySelector("body").style.backgroundColor=a;
document.querySelector(".color").innerHTML=a;
}

document.querySelector("a").addEventListener("click",()=>{
document.querySelector("body").style.backgroundColor="white";
})
