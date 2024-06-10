import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("Tulsa");
  const [weather, setWeather] = useState({ ready: false });

  function displayTemp(response) {
    setWeather({
      ready: true,
      name: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search(queryCity) {
    const key = "5b4802f40a5b2aoe7a3t7b824a662fdf";
    const url = `https://api.shecodes.io/weather/v1/current?query=${queryCity}&key=${key}&units=imperial`;
    axios.get(url).then(displayTemp);
  }

  // Initial search on component mount
  if (!weather.ready) {
    search(city);
    return "Loading...";
  }

  return (
    <div>
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
      <Weather data={weather} />
    </div>
  );
}
