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
      <div className="today-container">
        {weatherData &&
        Array.isArray(weatherData.weather) &&
        weatherData.weather[0] ? (
          <>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description || "Weather icon"}
              width={80}
              height={80}
            />
            <p>{weatherData.main.temp} °C</p>
            <p>
              {weatherData.name}, {weatherData.sys.country}
            </p>

            <p>
              Weather Condition: {weatherData.weather[0].main},{" "}
              {weatherData.weather[0].description}
            </p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} km/hr</p>
          </>
        ) : (
          <p></p>
        )}
      </div>
      <div className="future-container"></div>
    </div>
  );
}

export default Home;
