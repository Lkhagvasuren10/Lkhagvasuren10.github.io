var mycolors = ["blue", "orange", "yellow", "black", "pink", "purple", "green", "darkolivegreen", "grey","red"]
var count = -1
function change(){
    count = count + 1 
    document.body.style.background = mycolors[count]
    if(count == mycolors.length -1){
        console.log(mycolors[count])
        count = -1
    }
}
var Myinput = document.getElementById("Myinput")
function add(){
        document.body.style.background = Myinput.value
        color.push(Myinput.value)
        if(Myinput.value == "null"){
            alert("Add color")
        }        
}
 var i = 0
// var z = document.getElementsByClassName("on")
    // intervalid = setInterval(function() {
    //     document.body.style.backgroundColor = mycolors[i]
    //     i++
    //     if(i==mycolors.length){
    //         i=0
    //     }
        
    // },1000) 
    // function clickme() {
    //     if (!click) {
    //         clearInterval(intervalid)
    //    
    //  click = true
    //     }else if (click){
    //         intervalid = setInterval(function() {
    //             document.body.style.backgroundColor = mycolors[i]
    //             i++
    //             if(i==mycolors.length){
    //                 i=0
    //             }
    //         },1000) 
    //         click = false
    //     }
    // }
    var click = true
    let interval 
    function clickme() {
        if(click==true){
            interval = setInterval(colorChanger,1000)
            click = false
        }else{
            clearInterval(interval)
            click=true
        }
    }
    function colorChanger() {
        document.body.style.backgroundColor = mycolors[i]
                    i++
                    if(i==mycolors.length){
                        i=0
                    }
        
    }