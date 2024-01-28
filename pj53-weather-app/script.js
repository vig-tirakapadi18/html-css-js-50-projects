const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

const apiKey = "3bf87574a34f7d04b8ea7c6fdd001c65";

const getWeatherData = async (cityValue) => {
        try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);

                if (!response.ok) {
                        throw new Error("Server response is NOT ok!")
                }

                const data = await response.json();
                console.log(data)

                const temperature = Math.round(data.main.temp);
                const description = data.weather[0].description.toUpperCase();
                const icon = data.weather[0].icon;
                const weatherDetails = [
                        `Feels Like: ${Math.round(data.main.feels_like)}° C`,
                        `Humidity: ${data.main.humidity}%`,
                        `Wind Speed: ${data.wind.speed} m/s`
                ];

                weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description} icon" />`;

                weatherDataEl.querySelector(".temperature").textContent = `${temperature}° C`;

                weatherDataEl.querySelector(".weather").textContent = `${description}`;

                weatherDataEl.querySelector(".weather-details").innerHTML = weatherDetails.map((detail) => ` <p class="weather-item">${detail}</p>`).join("");
        } catch (error) {
                const errorEl = weatherDataEl.querySelector(".weather")
                errorEl.textContent = "Error: Please try again later!";
                errorEl.classList.add("error");
        }
};

formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        const cityValue = cityInputEl.value;
        getWeatherData(cityValue);
})