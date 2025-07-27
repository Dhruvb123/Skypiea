import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Skypiea</h1>
      <p>
        Welcome to <strong>Skypiea</strong>, your reliable Weather Forecast App
        designed to keep you informed about the weather conditions exactly when
        you need it. Whether you're planning your day, scheduling a trip, or
        simply curious about the climate of a city, Skypiea allows you to
        quickly access the current weather and a detailed forecast for the next
        five days for any location you choose. The app is user-friendly and
        intuitive, providing not only essential weather data such as
        temperature, humidity, wind speed, and weather descriptions, but also
        visually appealing and easy-to-understand forecasts. Additionally,
        Skypiea empowers users by letting them save their favorite cities, so
        you can effortlessly monitor the weather of your preferred destinations
        without repeated searches.
      </p>
      <p>
        Behind the scenes, Skypiea harnesses the power of the reliable{" "}
        <strong>OpenWeatherMap API</strong> (
        <a
          href="https://openweathermap.org/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          openweathermap.org/api
        </a>
        ), which supplies comprehensive and up-to-date weather information from
        thousands of stations and satellites worldwide. This ensures that all
        weather data presented is accurate and refreshed regularly to reflect
        changing conditions. To efficiently manage application state, especially
        user preferences such as saved cities and theme settings, Skypiea
        utilizes the <strong>React Context API</strong>. This enables seamless
        communication and data sharing across various components of the app
        without cumbersome prop drilling, resulting in a smooth and responsive
        user experience. Whether you are on mobile or desktop, Skypiea maintains
        fast and reliable performance while keeping your data synchronized and
        accessible throughout your weather forecasting journey.
      </p>
    </div>
  );
}

export default About;
