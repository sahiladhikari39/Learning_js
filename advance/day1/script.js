//------------------Four pillars of DOM-------------------------

//------------------Selection of an element---------------------
var a = document.querySelector("h1");
console.log(a);

//------------------Changing HTML-------------------------------
var b = document.querySelector("h1");
b.innerHTML = "THis is the edited heading";

//------------------Changing CSS---------------------------------
var c = document.querySelector("h1");
c.style.color = 'green';

//------------------Event listener-------------------------------
var d = document.querySelector("h1");
d.addEventListener("click", function(){
    d.innerHTML = "This is edited again";
    d.style.color = "rgba(255,0,0,0.5)"
})

var btn = document.querySelector("button");
btn.addEventListener("click", function(){
    btn.style.color = 'white';
    btn.style.backgroundColor = '#252525'
})


var bulbOn = 0; 
var btn2 = document.querySelector("#bulb-btn");
var bulb = document.querySelector("#bulb");
btn2.addEventListener("click", function(){
    if(bulbOn == 0){
        bulb.style.backgroundColor = "orange";
        bulbOn = 1;
    }else{
        bulb.style.backgroundColor = "white";
        bulbOn = 0;
    }
    
})