
let but=document.getElementsByTagName("button")[0];
let s_tegs=document.getElementsByTagName("span");
j=1
s_tegs[0].style.display = "block";
but.onclick = function(){
while(true) {
	switch(j){
		case 0:
		s_tegs[0].style.display = "block";
		s_tegs[1].style.display = "none";
		s_tegs[2].style.display = "none";
		j++;
		break;

		case 1:
		s_tegs[1].style.display = "block";
		s_tegs[0].style.display = "none";
		s_tegs[2].style.display = "none";
		j++;
		break;

		case 2:
		s_tegs[2].style.display = "block";
		s_tegs[1].style.display = "none";
		s_tegs[0].style.display = "none";
		j++;
		break;

		default:
		j=0;
        continue;
	}
	break;
}
}


