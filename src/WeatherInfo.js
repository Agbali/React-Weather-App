import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col countryName">
          <h1 id="lagosHaiD">{props.data.city}</h1>
        </div>
        <div className="Col-6"></div>
        <div className="Col"></div>
      </div>

      <div className="row degree_col">
        <div className="col-10">
          <WeatherTemperature celsius={props.data.temperature}/>
        </div>

        <div className="col-2">
          <div className="iconanddesc">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              id="w-icon"
              className="weather_icon text-capitalize"
            />
            <div className="iconanddesc" >
              <p id="weatherDescr" className="weatherDescription">
              {props.data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div>
          <ul className="windSpeed">
            <li>
              Wind: <span id="windeck">{props.data.wind}</span>
              <strong>km/h</strong>, Humidity:{" "}
              <span id="humidity">{props.data.humidity}</span>
              <strong>%</strong>
            </li>
            <li className="mt-1">
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
