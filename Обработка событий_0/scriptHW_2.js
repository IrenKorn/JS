
var modal = document.getElementById("hystmodal__shadow");
var modal_1 = document.getElementById("myModal");
var btn = document.getElementById("bth");
var close = document.getElementById("hystmodal__close");


btn.onclick = function() {
    modal.style.display = "block";
    modal_1.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
    modal_1.style.display = "none";
}



