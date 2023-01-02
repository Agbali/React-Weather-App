import React from "react";

export default function WeatherForecastDay(props) {
  function MaxTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}°`;
  }
  function MinTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ];
    return days[day];
  }
  
  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <div className="weatherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="weatherForecast-Temps">
        {" "}
        <span className="weatherForecast-maxtemp"> {MaxTemperature()}</span>
        <span className="weatherForecast-mintemp">{MinTemperature()}</span>
      </div>
    </div>
  );
}
