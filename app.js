

 function displayTemperature(response) {
  celsiusTemperature=response.data.main.temp;
    let temperatureElement = document.querySelector("#degree");
    let cityElement = document.querySelector("#cityname");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#Humidity");
    let windElement = document.querySelector(".wind");
    let dayElement = document.querySelector(".day");
    let iconElement=document.querySelector("#icoon");
    console.log(response.data);
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = response.data.wind.speed;
    dayElement.innerHTML = formatDay(response.data.dt * 1000);
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
    
  }
  function formatDay(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
  
    return day + " " + hours + ":" + minutes;
  }
  
  function search(city) {
    let apiKey = "29b613cb78020bf566b370de137d2f26";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#cityForm");
    search(cityInputElement.value);
  }
  let form = document.querySelector("#searchingForm");
  form.addEventListener("submit", handleSubmit);


  function displayFarenhietTemperature(event){
    event.preventDefault();
    farenhietLink.classList.add("active");
    cantigrdLink.classList.remove("active");
    let temperatureElement = document.querySelector("#degree");
    let farenhietLinkTemperature=(celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML=Math.round(farenhietLinkTemperature);
  }
  function displayCantigrdTemperature(event){
    event.preventDefault();
    farenhietLink.classList.remove("active");
    cantigrdLink.classList.add("active");
    let temperatureElement = document.querySelector("#degree");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
  }
  celsiusTemperature=null;

let farenhietLink = document.querySelector(".farenhat");
farenhietLink.addEventListener("click", displayFarenhietTemperature);

let cantigrdLink = document.querySelector(".cantigrd");
cantigrdLink.addEventListener("click", displayCantigrdTemperature);


function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["thu", "fri", "sat", "sun"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="col-2">
                <div class="weather-forcast-date">
                    su 
                </div>
                <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" width="36" />
                <div class="weather-forcast-temperature">
                    <span class="weather-forcast-temperature-max">
                        18
                    </span>
                    <span class="weather-forcast-temperature-min">
                        12
                    </span>
                </div>
                       </div>`;
  });
}





  search("new york");

