// document.getElementById("+").onclick 
// document.getElementById("1").onclick 
// document.getElementById("2").onclick
// document.getElementById("3").onclick

// document.getElementById("-").onclick
// document.getElementById("4").onclick
// document.getElementById("5").onclick
// document.getElementById("6").onclick

// document.getElementById("*").onclick
// document.getElementById("7").onclick
// document.getElementById("8").onclick
// document.getElementById("9").onclick

// document.getElementById("/").onclick
// document.getElementById("%").onclick
// document.getElementById("0").onclick

document.getElementById("=").onclick = function result(){
    let str= document.getElementById("input_field")
   
    str2= eval(str.value)
    str.value=str2

}


var butt =document.getElementsByClassName("button")
var input=document.getElementById("input_field")
