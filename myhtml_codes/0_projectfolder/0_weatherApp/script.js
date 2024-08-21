const apiKey = "7400239d1495a30ad080b7682581503b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".searchbar input");
const searchbtn = document.querySelector(".searchbar button");

const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
   
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display= "none";
    }
    else{
        let data = await response.json();
        console.log(data);
   
       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
       document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
       document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    console.log(data.wind.speed);
       if(data.weather[0].main == "Clouds")
       {
           weatherIcon.src ="images/mist.png"  
       }
       else if(data.weather[0].main == "Clear")
       {
           weatherIcon.src ="images/clear.png"  
       }
       else if(data.weather[0].main == "Rain")
       {
           weatherIcon.src ="images/rain.png"  
       }
       else if(data.weather[0].main == "Haze")
       {
           weatherIcon.src ="images/drizzle.png"  
       }
       else if(data.weather[0].main == "Mist")
       {
           weatherIcon.src ="images/mist.png"  
       }
       document.querySelector(".weather").style.display= "block";
       document.querySelector(".error").style.display="none";
   
    }
   
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});

searchbox.addEventListener("keydown",()=>{
    if(event.keyCode===13){
        event.preventDefault();
        checkWeather(searchbox.value);
    }
});