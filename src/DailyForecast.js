import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="row">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="row">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="row">
          <WeatherForecastDay data={forecast[4]} />
        </div>
        <div className="row">
          <WeatherForecastDay data={forecast[5]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "5b4802f40a5b2aoe7a3t7b824a662fdf";
    const city = props.city;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
