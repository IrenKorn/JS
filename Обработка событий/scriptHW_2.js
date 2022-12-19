let ball = document.getElementById("ball");
let fix = document.getElementById("fix");
let gol_l = document.getElementById("gol_l");
let gol_r = document.getElementById("gol_r");
let L = document.getElementById("L");
let R = document.getElementById("R");
let L_point = 0;
let R_point = 0;


fix.onclick = function(e){
    ball.style.left = (e.pageX-50) + "px";
    ball.style.top = (e.pageY-50) + "px";

}
gol_l.onclick = function(e){
    ball.style.left = (e.pageX-50) + "px";
    ball.style.top = (e.pageY-50) + "px";
    setTimeout(function(){
        L_point++;
        L.innerHTML = L_point;

    }, 700); 
    }
gol_r.onclick = function(e){
    ball.style.left = (e.pageX-50) + "px";
    ball.style.top = (e.pageY-50) + "px";
    setTimeout(function(){
        R_point++;
        R.innerHTML = R_point;

    }, 700); 
    }
