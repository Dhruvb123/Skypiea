// ForecastCard.jsx
import React from "react";
import "./ForecastCard.css";

function ForecastCard({ data, unitSystem }) {
  const {
    main: { temp, temp_min, temp_max, humidity },
    weather,
    wind,
    dt_txt,
  } = data;

  const icon = weather[0].icon;
  const description = weather[0].description;

  const date = new Date(dt_txt);
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className="forecast-card">
      <div className="forecast-day">{weekday}</div>
      <img
        className="forecast-icon"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <div className="forecast-temp">
        {Math.round(temp)} {unitSystem === "metric" ? "°C" : "°F"}
      </div>
      <div className="forecast-description">
        High: {temp_max} {unitSystem === "metric" ? "°C" : "°F"}
      </div>
      <div className="forecast-description">
        Low: {temp_min} {unitSystem === "metric" ? "°C" : "°F"}
      </div>
      <div className="forecast-details">
        <div>💧 {humidity}%</div>
        <div>
          🌬️ {wind.speed} {unitSystem === "metric" ? "km/h" : "mph"}
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
