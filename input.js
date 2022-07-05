document.getElementById("=").onclick = function result(){
    let str= document.getElementById("input_field")
   
    let str2= eval(str.value)
    str.value=str2

}

document.getElementById("ce").onclick = function clear(){
    input.value= ""
}

var btn =document.getElementsByClassName("button")
var input=document.getElementById("input_field")

for (let i = 0; i < btn.length; i++) 
{
    btn[i].onclick = function values(){
        input.value= input.value + btn[i].innerHTML

    }
}
