
var score = 0;

var timer = 15;

var hitit;

function makeBubble() {

    var A = "";
    for( var i = 1; i <=152; i++){
     var b = Math.floor(Math.random()*10)
        A += `<div class="bubble">${b}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = A;       
}


function runTimer() {
 var Timerinterval = setInterval(function(){
        if(timer > 0){
                        timer--;
                        document.getElementById("timervalue").textContent = timer;
                        }
        else{
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over Your Score is  ${n}</h1>`
            
                          clearInterval(Timerinterval)
                         }
                        },1000)
}


function getNewHit(){
     hitit = Math.floor(Math.random()*10)
    document.getElementById("Hitvalue").textContent = hitit;

}

var n = 0 ;
function increasescore(){
    score += 10;
     n = document.getElementById("scorevalue").textContent = score;
}

document.getElementById("bottom").addEventListener("click",function(s){
    var  Clickednumber = Number( s.target.textContent)
    if(Clickednumber === hitit){
        increasescore();
        makeBubble();
        getNewHit();
    }
    
})
makeBubble();
runTimer()
getNewHit()
