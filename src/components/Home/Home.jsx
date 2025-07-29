import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import toast from "react-hot-toast";

import "./Home.css";
import ForecastCard from "../ForecastCard/ForecastCard";

function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  const [query, setQuery] = useState("");
  const [unit, setUnit] = useState("°C");
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    if (query.trim()) {
      handleSearch();
    } else {
      toast.error("Please Enter A Location!");
    }
  }, [unitSystem]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) {
      toast.error("Please Enter A Location!");
      return;
    }
    try {
      const apiKey = import.meta.env.VITE_APP_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unitSystem}`;
      const futUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=${unitSystem}`;

      const res1 = await axios.get(url);
      console.log("Search result:", res1.data);
      setWeatherData(res1.data);

      const res2 = await axios.get(futUrl);
      const forecastData = res2.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      console.log("Forecasting Data: \n", forecastData);
      setForecastData(forecastData);
    } catch (error) {
      toast.error(error.response.data.message.toUpperCase());
    }
  };

  const toggleUnit = () => {
    unit === "°C" ? setUnit("°F") : setUnit("°C");
    unitSystem === "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");
  };

  return (
    <div className="home-container">
      <div className="searchBar-container">
        <div className="search-wrapper">
          <input
            type="text"
            className="searchBar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <SearchIcon className="search-icon" onClick={handleSearch} />
        </div>
        <button className="save-btn">SAVE</button>
      </div>

      {weatherData &&
        weatherData.weather &&
        Array.isArray(weatherData.weather) &&
        weatherData.weather.length > 0 && (
          <div className="today-container">
            <div className="today-main-row">
              <img
                className="today-icon"
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description || "Weather icon"}
              />
              <div className="today-main-info">
                <div className="today-temp">
                  {Math.round(weatherData.main.temp)}{" "}
                  <button
                    className="degree-button"
                    onClick={() => {
                      toggleUnit();
                    }}
                  >
                    {unit}
                  </button>
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
                  {" "}
                  {weatherData.weather[0].main},{" "}
                  {weatherData.weather[0].description}
                </b>
              </div>
              <div>
                Humidity: <b>{weatherData.main.humidity}%</b>
              </div>
              <div>
                Wind Speed:{" "}
                <b>
                  {weatherData.wind.speed}{" "}
                  {unitSystem === "metric" ? "km/hr" : "mph"}
                </b>
              </div>
            </div>
          </div>
        )}

      <div className="forecast-container">
        {forecastData &&
          forecastData.map((data, index) => (
            <ForecastCard key={index} data={data} unitSystem={unitSystem} />
          ))}
      </div>
    </div>
  );
}

export default Home;
