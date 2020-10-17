var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")
var div3 = document.getElementById("div3")
function Myfunction(){
    var i = div1.className
    div1.className = div3.className
    div3.className = div2.className
    div2.className = i
}