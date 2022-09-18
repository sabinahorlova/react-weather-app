import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });
  function displayWeather(response) {
    console.log(response.data);
    setWeather({
      loaded: true,
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (weather.loaded === true) {
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                class="form-control search-input"
                autoFocus={true}
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn w-100" value="Search" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>{weather.name}</h1>
            <ul>
              <li>{weather.description}</li>
              <li>
                Humidity:
                <span className="humidity"> {weather.humidity} %</span>
              </li>
              <li>
                Wind:{" "}
                <span className="wind">{Math.round(weather.wind)} km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3a654bc3e678a3417911bfe908b59193";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
