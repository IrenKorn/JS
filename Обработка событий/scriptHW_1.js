class figura {
    p=0;
    pl=0;
}

class kvadrat extends figura{
    a=0;
    p_kv(_a){
        this.a=_a
        this.p=this.a*4
        document.write("Периметр квадрата = " + this.p.toFixed(1) + "<br>")
    }
    pl_kv(){
        this.pl=Math.pow(this.a,2)
        document.write("Площадь квадрата = " + this.pl.toFixed(1))
    }
}

class primoygolnik extends figura{
    a=0;
    b=0;
    p_pr(_a,_b,){
        this.a=_a;
        this.b=_b;
    this.p=(this.a+this.b)*2;
    document.write("Периметр прямоугольника = " + this.p.toFixed(1) + "<br>")
    }
    pl_pr(){
        this.pl=this.a*this.b;
        document.write("Площадь прямоугольника = " + this.pl.toFixed(1))
    }
}

class krug extends figura{
    r=2;
    p_kr(_r){
        this.r=_r;
        this.p=2*Math.PI*this.r
        document.write("Длина окружности = " + this.p.toFixed(1) + "<br>")
    }
    pl_kr(){
        this.pl=Math.PI*Math.pow(this.r,2)
        document.write("Площадь круга = " + this.pl.toFixed(1))
    }
}



let ent = prompt("Выберите фигуру:\n 1 - квадрат\n 2 - прямоугольник\n 3 - круг","");
let btn = document.getElementsByTagName("button")[0];
let Fig = document.getElementById("fig");
switch(ent){
    case '1':
    ent=new kvadrat();
    while(true){
    kvadrat.a=+prompt('Ведите длину стороны квадрата:',"");
    if(kvadrat.a<0)
    {
        alert("Значение не может быть отрицательным.")
        continue;
    }
    break;
    }
    ent.p_kv(kvadrat.a);
    ent.pl_kv(kvadrat.a);
    btn.style.display = "block";

    btn.onclick = function(){
   if(kvadrat.a>16){
        alert('Слишком большой масштаб:(')
    }
    else{
        Fig.style.height = kvadrat.a*37.936267+"px";
        Fig.style.width = kvadrat.a*37.936267+"px";
        Fig.style.display = "block";
        Fig.style['background-color'] = "#5e9137"}        
    }
    

    break;

    case '2':
    ent=new primoygolnik();
    while(true){
    primoygolnik.a=+prompt('Ведите длину стороны a прямоугольника:',"");
    primoygolnik.b=+prompt('Ведите длину стороны b прямоугольника:',"");
    if(primoygolnik.a<0 || primoygolnik.b<0)
    {
        alert("Значение не может быть отрицательным.")
        continue;
    }
    break;
    }
    ent.p_pr(primoygolnik.a,primoygolnik.b);
    ent.pl_pr(primoygolnik.a,primoygolnik.b);
    btn.style.display = "block";
    btn.onclick = function(){
    if(primoygolnik.a>25 || primoygolnik.b>15){
        alert('Слишком большой масштаб:(')
    }
    else{
    Fig.style.width = primoygolnik.a*37.936267+"px";
    Fig.style.height = primoygolnik.b*37.936267+"px";
    Fig.style.display = "block";
    Fig.style['background-color'] = "#2b8f88"}
    }
    break;


    case '3':
    ent=new krug();
    while(true){
    krug.r=+prompt('Ведите радиус круга:',"");
    if(krug.r<0)
    {
        alert("Значение не может быть отрицательным.")
        continue;
    }
    break;
    }
    ent.p_kr(krug.r);
    ent.pl_kr(krug.r);
    btn.style.display = "block";
    btn.onclick = function(){
    if(krug.r>8){
        alert('Слишком большой масштаб:(')
    }
    else{
    Fig.style.height = (krug.r*2)*37.936267+"px";
    Fig.style.width = (krug.r*2)*37.936267+"px";
    Fig.style['border-radius'] = 50+"%";
    Fig.style.display = "block";
    Fig.style['background-color'] = "#bf75a6"}
    }
    break; 

    default:
    break;
    
}
