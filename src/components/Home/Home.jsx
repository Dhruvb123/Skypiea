import React, { useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";

function Home() {
  const [weatherData, setWeatherData] = useState("");
  const [query, setQuery] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const apiKey = import.meta.env.VITE_APP_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
      const futUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=metric`;

      const res1 = await axios.get(url);
      console.log("Search result:", res1.data);
      setWeatherData(res1.data);

      const res2 = await axios.get(futUrl);
      const forecastData = res2.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      console.log("Forecasting Data: \n", forecastData);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="home-container">
      <div className="searchBar-container">
        <input
          type="text"
          className="searchBar"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon className="search-icon" />
      </div>

      {weatherData &&
        Array.isArray(weatherData.weather) &&
        weatherData.weather[0] && (
          <div className="today-container">
            <div className="today-main-row">
              <img
                className="today-icon"
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description || "Weather icon"}
              />
              <div className="today-main-info">
                <div className="today-temp">
                  {Math.round(weatherData.main.temp)}°C
                </div>
                <div className="today-city">
                  {weatherData.name}, {weatherData.sys.country}
                </div>
              </div>
            </div>
            <div className="today-details">
              <div>
                Weather Condition:&nbsp;
                <b>
                  {weatherData.weather[0].main},{" "}
                  {weatherData.weather[0].description}
                </b>
              </div>
              <div>
                Humidity: <b>{weatherData.main.humidity}%</b>
              </div>
              <div>
                Wind Speed: <b>{weatherData.wind.speed} km/hr</b>
              </div>
            </div>
          </div>
        )}

      <div className="future-container"></div>
    </div>
  );
}

export default Home;
