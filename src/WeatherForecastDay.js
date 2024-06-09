import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    return `${Math.round(props.data.temperature.maximum)}°`;
  }

  function minTemp() {
    return `${Math.round(props.data.temperature.minimum)}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div>{day()}</div>
      <div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="forecast-temperature">
        <strong>{maxTemp()}</strong> | {minTemp()}
      </div>
    </div>
  );
}
