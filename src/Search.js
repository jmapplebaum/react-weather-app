import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [result, setResult] = useState(null);
  let [weather, setWeather] = useState(null);

  function displayTemp(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let key = "a969311cfcbb4a83dfad2cf7478397f9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;
    axios.get(url).then(displayTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a city"
        autoFocus="on"
        className="search-input"
        onChange={updateCity}
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );

  if (result) {
    return (
      <div>
        {" "}
        {form}
        <div className="CurrentWeather">
          <div>
            <h1>{city}</h1>
            <p>
              <span>*Sunday 18:34, </span>
              <span>{weather.description}</span>
              <br />
              Humidity: <strong>{weather.humidity}</strong>, Wind:
              <strong> {Math.round(weather.wind)} mph</strong>
            </p>
          </div>
          <div>
            <span className="emoji">🌪️</span>
            <span className="current-temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
