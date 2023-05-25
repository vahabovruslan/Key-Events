function gameAreaWidth() {
    const en= document.getElementById("en")
    const gamearea= document.getElementById("gamearea")
    if (en.value <= 1000) {
        gamearea.style.width = en.value + "px";
    }
    else{
        alert("Zehmet olmasa sehifeni doldurmayin!")
    }
    
}
function gameAreaHeight() { 
    const uzunluq = document.getElementById("uzunluq")
    const gamearea= document.getElementById("gamearea")
    if (uzunluq.value <= 550) {
         gamearea.style.height = uzunluq.value + "px";
    }
    else{
        alert("Zehmet olmasa sehifeni doldurmayin!")
    }
}
function boxColor() {
    const color = document.getElementById("color")
    const gamearea= document.getElementById("gamearea")
    gamearea.style.backgroundColor = color.value 
}
function objectWidth() {
    const topen = document.getElementById("topen")
    const top = document.getElementById("boll")
    top.style.width = topen.value + "px"
}
function objectHeight() {
    const topuzun = document.getElementById("topuzun")
    const top = document.getElementById("boll")
    top.style.height = topuzun.value + "px"
}
function objectColor() {
    const tcolor = document.getElementById("tcolor")
    const top = document.getElementById("boll")
    top.style.backgroundColor = tcolor.value
}
const gamearea= document.getElementById("gamearea")
const boll = document.getElementById("boll")
const steps = document.getElementById("steps")
var left = 0;
var up = 0;
function movingUp() {
    if (up>0) {
    up -= parseFloat(steps.value);  
    boll.style.top = up + 'px';
    }
    
}
function movingRight() {
    left += parseFloat(steps.value); 
    boll.style.left = left + 'px';
}   
function movingLeft() {
    if (left > 0) {
    left -= parseFloat(steps.value); 
    boll.style.left = left + 'px';
    }
}

function movingDown() {
    up += parseFloat(steps.value) 
    boll.style.top = up + 'px';  
}
function format() {
    boll.style.top=0;
    boll.style.left=0
}