var min = 0
var sec = 0 
var doli = 0
var intervalId
var paused = true
var Dmin = 0
var Dsec = 0
var Ddoli = 0
var t = 0
var lapy = 1
var lapbutt = document.querySelectorAll("button")[2]
function startstop(){
    if(paused){
        intervalId = setInterval(Mydiv, 10)
        document.getElementById("startstop").innerHTML = "Stop"
        lapbutt.disabled = false
    } else{
        clearInterval(intervalId)
        document.getElementById("startstop").innerHTML = "Start"
        lapbutt.disabled = true
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
    if(!paused)startstop()

}
function laps(){
        // //var lapnum = document.createElement("div")
        // var lapdisplay = document.createElement("div")
        // lapnum.innerHTML = laptool;
        // lapdisplay.innerHTML = Dmin +":"+ Dsec +":"+ Ddoli
        // console.log(laptool)
        // laptool++
        var x = document.createElement("div")
        document.getElementById("lap").append(x)
        x.innerHTML = lapy + " "+document.getElementById("Mydiv").innerHTML
        lapy += 1
        
        
    }
        

    

    