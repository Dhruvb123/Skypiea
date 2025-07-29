import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFavorites } from "../../context/FavouritesContext";
import toast from "react-hot-toast";
import "./MyCities.css"; // new CSS file

function MyCities() {
  const { favorites } = useFavorites();
  const [citiesWeather, setCitiesWeather] = useState([]);

  useEffect(() => {
    if (favorites.length === 0) {
      setCitiesWeather([]);
      return;
    }

    const fetchCitiesWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_APP_OPENWEATHER_API_KEY;
        const promises = favorites.map((city) =>
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          )
        );

        const responses = await Promise.all(promises);
        const data = responses.map((res) => res.data);
        setCitiesWeather(data);
      } catch (error) {
        toast.error("Failed to load saved cities' weather.");
      }
    };

    fetchCitiesWeather();
  }, [favorites]);

  return (
    <div className="my-cities-container">
      <h2>My Cities</h2>
      {citiesWeather.length === 0 && <p>No saved cities yet.</p>}
      {citiesWeather.map((cityData) => (
        <div key={cityData.id} className="my-city-card">
          <img
            src={`https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`}
            alt={cityData.weather[0].description}
            className="city-icon"
          />
          <div className="city-info">
            <div className="city-name">
              {cityData.name}, {cityData.sys.country}
            </div>
            <div className="city-temp">{Math.round(cityData.main.temp)} °C</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyCities;
