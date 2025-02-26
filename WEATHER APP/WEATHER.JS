const apiKey = "c670fb20b2f08f0feb9d74ce4220123a"; 
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("searchButton").addEventListener("click", () => {
    const city= document.getElementById("cityInput").value;
    if (city) {
        fetchWeather(city);
    } else {
        displayMessage("Please enter a city.");
    }
});

function fetchWeather(city) {
    const url = `${baseUrl}?q=${city},KE&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found or invalid API key.");
            }
            
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            displayMessage(error.message);
        });
}

function displayWeather(data) {
    const { name, main, weather} = data;
    const resultDiv = document.getElementById("weatherResult");
    resultDiv.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        
    `;
}

function displayMessage(){
    const resultDiv = document.getElementById("weatherResult");
    resultDiv.innerHTML = `<p>${message}</p>`;
}

;
