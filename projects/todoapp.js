function go() {
    let inp = document.getElementById("inp")
    let div = document.createElement("div")
    let span = document.createElement("span")
    let button= document.createElement("button")
    button.innerHTML="-"
    button.onclick=function () {
        div.remove()
    }
    span.innerHTML= inp.value
    div.appendChild(span)
    div.appendChild(button)
    document.getElementById("utga").appendChild(div)
    document.getElementById("inp").value=""
}