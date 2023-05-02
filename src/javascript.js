let now = new Date();

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

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let day = days[now.getDay()];
let month = months[now.getMonth()];

let currentDate = document.querySelector("h2");
currentDate.innerHTML = `${day},   ${month} ${date},   ${year}`;
let time = document.querySelector(".time");
time.innerHTML = `${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#submit-city");
  let cityName = document.querySelector("h1");
  if (searchInput.value) {
    cityName.innerHTML = `${searchInput.value}`;
  } else {
    cityName.innerHTML = null;
    alert("Please type a city");
  }
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", search);
