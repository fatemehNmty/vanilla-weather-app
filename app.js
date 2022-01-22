
function dispalyTemperature(response){
    let temperatureElement=document.querySelector("#degree");
    let cityElement=document.querySelector("#cityname");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#Humidity");
    let windElement=document.querySelector("#wind");
    let dayElement=document.querySelector("#day");
    let timeElement=document.querySelector("#time");
    console.log(response.data);
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data;
    descriptionElement.innerHTML=response.data;
    humidityElement.innerHTML=response.data;
    windElement.innerHTML=response.data;
    dayElement=day;
    timeElement=(hours+":"+minutes);
    console.log(response.data);

}
function formatDay(timesstap){
    let date=new Date(timesstap);
    let day=date.getDay();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let days=[ "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
    let day=days[date.getDay()];
    if(minutes<10){
        minutes=("0"+minutes);
    }
    if(hours<10){
        hours=("0"+hours);
    }

}




let apiKey="29b613cb78020bf566b370de137d2f26";
let city ="new york";
let apiUrl=`api.openweathermap.org/data/2.5/weather?id={city}&appid={apiKey}&units=metric`;
axios.get(apiUrl).then(dispalyTemperature);
