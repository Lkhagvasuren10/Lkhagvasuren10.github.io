var min = 0
var sec = 0 
var doli = 0
var intervalId
var paused = true
var Dmin = 0
var Dsec = 0
var Ddoli = 0
var t = 0
function startstop(){
    if(paused){
        intervalId = setInterval(Mydiv, 10)
        document.getElementById("startstop").innerHTML = "Stop"
    } else{
        clearInterval(intervalId)
        document.getElementById("startstop").innerHTML = "Start"
    } paused = !paused
}
function Mydiv(){
    document.getElementById("Mydiv").innerHTML = Dmin +":"+ Dsec +":"+ Ddoli 
    doli ++
    if(doli == 100){
        doli = 0
        sec++
    }
    if(sec == 60){
        sec = 0
        min++
    }
    if(doli < 10){
        Ddoli = "0" + doli
    } else {
        Ddoli = doli
    }
    if (sec < 10){
        Dsec = "0" + sec
    } else{
        Dsec = sec
    }
    if(min < 10){
        Dmin = "0" + min
    } else{
        Dmin = min
    }
}
function reset(){
    clearInterval(intervalId)
    min = 0 
    sec = 0 
    doli = 0
    document.getElementById("Mydiv").innerHTML = "00:00:00"
    document.getElementById("startstop").innerHTML = "Start"
    document.getElementById("lap").innerHTML = ""
}
function laps(){
    var x = document.createElement("div")
    document.getElementById("lap").append(x)
    x.innerHTML = document.getElementById("Mydiv").innerHTML
    
}
    