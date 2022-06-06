let apiKey = "1ab9deb2264b827f1bbed6ea5ab101c3";
function city_name(value){
let name = document.getElementById('city').value;
let city=name;
let stroks=document.getElementsByTagName('p');
for (let i = 0; i <stroks.length; i++){
stroks[i].style.display="block";
}

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
axios.get(url).then(res => {
   console.log(res)
   document.querySelector('.temp').innerHTML = res.data.main.temp
   document.querySelector('.temp_4').innerHTML = Math.round(res.data.main.temp)+"°C"
   document.querySelector('.temp_5').innerHTML = res.data.weather[0].description
   document.querySelector('.temp_0').innerHTML = res.data.main.feels_like
   document.querySelector('.temp_1').innerHTML = res.data.main.temp_min
   document.querySelector('.temp_2').innerHTML = res.data.main.temp_max
   document.querySelector('.press').innerHTML = res.data.main.pressure
   document.querySelector('.humidity').innerHTML = res.data.main.humidity
   document.querySelector('.wind').innerHTML = res.data.wind.speed
   document.querySelector('.temp_3').innerHTML = res.data.name
   let icon=res.data.weather[0].icon
   let ops=document.getElementById('ops');
   ops.style['background-image']=`url(http://openweathermap.org/img/wn/${icon}@2x.png)`;
})
}