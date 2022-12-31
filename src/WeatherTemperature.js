import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temp-degree" id="symbol">
          {Math.round(props.celsius)}
        </span>
        <span href="/" className="celsius_unit" id="Celsius-unit">
          °C |{" "}
          <a
            href="/"
            onClick={convertToFarenheit}
            className="text-decoration-none"
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temp-degree" id="symbol">
          {Math.round(farenheit())}
        </span>

        <span className="celsius_unit" id="Celsius-unit">
          <a
            href="/"
            onClick={convertToCelsius}
            className="text-decoration-none"
          >
            °C
          </a>
          <span> | °F</span>
        </span>
      </div>
    );
  }
}
