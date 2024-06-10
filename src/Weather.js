import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureUnit from "./TemperatureUnit";
import DailyForecast from "./DailyForecast";

export default function Weather(props) {
  return (
    <div>
      <div className="CurrentWeather">
        <div>
          <h1>{props.data.name}</h1>
          <p>
            <span>
              {" "}
              <FormattedDate date={props.data.date} />{" "}
            </span>
            <span>{props.data.description}</span>
            <br />
            Humidity: <strong>{props.data.humidity}</strong>, Wind:
            <strong> {Math.round(props.data.wind)} mph</strong>
          </p>
        </div>
        <div>
          <span className="emoji">
            {" "}
            <img
              src={props.data.icon}
              alt="current weather condition icon"
              width="100px"
            />{" "}
          </span>
          <span>
            <TemperatureUnit fahrenheit={props.data.temperature} />
          </span>
        </div>
      </div>
      <DailyForecast city={props.data.name} />
    </div>
  );
}
