let tom= new Date()
tom.setDate(tom.getDate()+1)
let nextday =  (tom.getMonth()+1)+ '/' + tom.getDate()  +'/' + tom.getFullYear()
console.log(nextday)
document.getElementById("date").innerHTML += nextday;

const API_key='c37ad7abb624f171f0ac45553a064954'



/*fetch("https://api.openweathermap.org/data/2.5/forecast?lat=42.3505&lon=-71.1054&appid=c37ad7abb624f171f0ac45553a064954")
.then((data)=> data.json())

.then((jsonData) => {
  console.log(jsonData)
}) */

window.onload = function(position){
  var startPos;
  var geoSuccess = function(position){
startpos = position;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${startpos.coords.latitude}&lon=${startpos.coords.longitude}&appid=${API_key}`)
    .then((data)=> data.json())
    
    .then((weather) => {
      console.log(weather)
      fetch(`https://openweathermap.org/img/wn/${weather.list[2].weather[0].icon}@2x.png`)
      .then((res) => res.blob())
      .then((result) => {
        /*console.log(weather.city.name);
        console.log(weather.list[2].weather[0].main);
        console.log(weather.list[2].weather[0].description);
        console.log(Math.round((weather.list[2].main.temp)-273.13) + "°C");
        console.log(Math.round((weather.list[2].main.feels_like)-273.13)+ "°C");
        console.log(weather); */
    
        document.getElementById("location").innerHTML = weather.city.name;
        document.getElementById("current-weather").innerHTML += weather.list[2].weather[0].main;
        document.getElementById("weather-description").innerHTML += weather.list[2].weather[0].description;
        document.getElementById("degrees").innerHTML += " " + Math.round((weather.list[2].main.temp)-273.13) + "°C";
        document.getElementById("feelslike").innerHTML += Math.round((weather.list[2].main.feels_like)-273.13)+ "°C";
        const weatherimg = URL.createObjectURL(result);
        document.getElementById("look").src = weatherimg;
      })
    
    })


  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
}