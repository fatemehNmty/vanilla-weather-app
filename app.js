let apiKey="29b613cb78020bf566b370de137d2f26";
let city 
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


function dispalyTemperature(response){
    let temperatureElement=document.querySelector("#degree");
    let cityElement=document.querySelector("#cityname");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#Humidity");
    let windElement=document.querySelector("#wind");
    let dayElement=document.querySelector("#day");
    let timeElement=document.querySelector("#time");
    console.log(response.data);
}