import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("Tulsa");
  let [weather, setWeather] = useState({ ready: false });

  function displayTemp(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const key = "a969311cfcbb4a83dfad2cf7478397f9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;
    axios.get(url).then(displayTemp);
  }

  if (weather.ready) {
    return (
      <div>
        {" "}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a city"
            autoFocus="on"
            className="search-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>{" "}
        <Weather data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
