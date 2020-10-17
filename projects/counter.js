var div =  document.querySelector("#Mydiv") 
var input = document.querySelector("#Myinput") 
function Minus(){
    if(Myinput.value == ""){
        div.innerHTML--
    } else {
        div.innerHTML -= Myinput.value
    }
}
function Plus(){
    if(Myinput.value ==""){
        div.innerHTML++
    } else {
        div.innerHTML = Number(div.innerHTML) + Number(Myinput.value)
    }
}
function Reset(){
    div.innerHTML = 0
    Myinput.value = ""
}