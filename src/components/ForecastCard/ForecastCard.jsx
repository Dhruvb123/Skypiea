import React from "react";
import "./ForecastCard.css";

const ForecastCard = ({ forecast }) => {
  const icon = forecast.weather[0].icon;
  const date = new Date(forecast.dt * 1000); // Convert UNIX timestamp to Date object
  const day = date.toLocaleDateString(undefined, { weekday: "short" }); // e.g. "Mon"

  return (
    <div className="forecast-card">
      <p className="forecast-day">{day}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={forecast.weather[0].description}
        className="forecast-icon"
      />
      <p className="forecast-temp">{Math.round(forecast.main.temp)}°C</p>
      <p className="forecast-condition">{forecast.weather[0].main}</p>
      <p className="forecast-description">{forecast.weather[0].description}</p>
      <p className="forecast-humidity">Humidity: {forecast.main.humidity}%</p>
      <p className="forecast-wind">Wind: {forecast.wind.speed} km/h</p>
    </div>
  );
};

export default ForecastCard;
