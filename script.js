const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weather-condition");

searchBtn.addEventListener("click", () => {

    const city = cityInput.value;

    cityName.textContent = city;

    temperature.textContent = "28°C";

    weatherCondition.textContent = "Cloudy";

});