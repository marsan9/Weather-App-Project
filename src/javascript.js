function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let myDate = date.getDate();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = date.getFullYear();
  let day = days[date.getDay()];
  let month = months[date.getMonth()];

  return `${day}, ${month} ${myDate}, ${year} - ${hours}:${minutes}`;
}

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  //document.querySelector("#temperature-high").innerHTML = Math.round(
  //  response.data.main.temp_max
  //);
  //document.querySelector("#temperature-low").innerHTML = Math.round(
  //  response.data.main.temp_min
  //);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  console.log(response);
}

function search(city) {
  let apiKey = "7a5da8ff0df86dae2b7558aacdcfe231";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}

function citySubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#submit-city").value;
  search(city);
}

function searchLocation(position) {
  let apiKey = "7a5da8ff0df86dae2b7558aacdcfe231";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}

function showPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
currentDate.innerHTML = formatDate(currentTime);

let form = document.querySelector("#search-city");
form.addEventListener("submit", citySubmit);

let currentButton = document.querySelector("#current-location-button");
currentButton.addEventListener("click", showPosition);

search("New York");
