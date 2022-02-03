

 function displayTemperature(response) {
    let temperatureElement = document.querySelector("#degree");
    let cityElement = document.querySelector("#cityname");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#Humidity");
    let windElement = document.querySelector(".wind");
    let dayElement = document.querySelector(".day");
    console.log(response.data);
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = response.data.wind.speed;
    dayElement.innerHTML = formatDay(response.data.dt * 1000);
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
  
  search("new york");

