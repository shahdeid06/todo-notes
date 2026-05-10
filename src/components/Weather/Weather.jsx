import { useState } from "react";

function Weather() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error , setError] = useState("");

  const apiKey = "c4c711df7b8e0da14f966cc7ec36baf5";

  async function getWeather() {

  if(city === "") return;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  const data = await response.json();

  if(data.cod === "404"){
    setWeather(null);
    setError("City not found")
    return;
  }

  setWeather(data);
}

  return (
    <div className="weather-card">
      <div className="weather">

      <h2>Weather App</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>
          Search
        </button>

      </div>

      {error && <p className="error">{error}</p>}

      {weather && weather.main && (
        <div className="weather-info">

          <h3>{weather.name}</h3>

          <h1>{Math.round(weather.main.temp)}°C</h1>

          <p>{weather.weather[0].main}</p>

          <p>Humidity: {weather.main.humidity}%</p>

          <p>Wind: {weather.wind.speed} km/h</p>

        </div>
      )}

      </div>

    </div>
  );
}

export default Weather;