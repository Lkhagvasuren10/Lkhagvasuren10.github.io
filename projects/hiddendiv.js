var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")
var div3 = document.getElementById("div3")
var count = 0
function Myfunction(){
    count ++
    if(count == 1){
        div1.style.visibility = "hidden"
    } else if (count == 2){
        div1.style.visibility = "visible"
        div2.style.visibility = "hidden"
    } else if (count == 3){
        div2.style.visibility = "visible"
        div3.style.visibility = "hidden"
    } else{
        div1.style.visibility = "visible"
        div2.style.visibility = "visible"
        div3.style.visibility = "visible"
        count = 0
    }
}