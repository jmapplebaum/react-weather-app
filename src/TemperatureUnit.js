import React, { useState } from "react";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("imperial");

  function convertMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function convertImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <span>
        <span className="current-temperature">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="unit">
          °F |
          <a href="/" onClick={convertMetric}>
            {" "}
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let metric = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span>
        <span className="current-temperature">{Math.round(metric)}</span>
        <span className="unit">
          <a href="/" onClick={convertImperial}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
