import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className=" ">
      <div className="row weatherForecast">
        <div className="col content">
          <div className="weatherForecast-day">Mon</div>
          <div className="weatherForecast-time">time</div>
          <div className="weatherForecast-icon">
            <img
              src={props.forecast.iconUrl}
              alt={props.forecast.description}
            />
          </div>
          <div className="weatherForecast-Temps">
            {" "}
            <span className="weatherForecast-maxtemp">35° </span>
            <span className="weatherForecast-mintemp">31°</span>
          </div>
        </div>

        <div className="col content ">
          <div className="weatherForecast-day">Tue</div>
          <div className="weatherForecast-time">time</div>
          <div className="weatherForecast-icon">
            <img
              src={props.forecast.iconUrl}
              alt={props.forecast.description}
            />
          </div>
          <div className="weatherForecast-Temps">
            {" "}
            <span className="weatherForecast-maxtemp">35°</span>
            <span className="weatherForecast-mintemp">31°</span>
          </div>
        </div>

        <div className="col content">
          <div className="weatherForecast-day">Wed</div>
          <div className="weatherForecast-time">time</div>
          <div className="weatherForecast-icon">
            <img
              src={props.forecast.iconUrl}
              alt={props.forecast.description}
            />
          </div>
          <div className="weatherForecast-Temps">
            {" "}
            <span className="weatherForecast-maxtemp">35°</span>
            <span className="weatherForecast-mintemp">31°</span>
          </div>
        </div>

        <div className="col content">
          <div className="weatherForecast-day">Thur</div>
          <div className="weatherForecast-time">time</div>
          <div className="weatherForecast-icon">
            <img
              src={props.forecast.iconUrl}
              alt={props.forecast.description}
            />
          </div>
          <div className="weatherForecast-Temps">
            {" "}
            <span className="weatherForecast-maxtemp">35°</span>
            <span className="weatherForecast-mintemp">31°</span>
          </div>
        </div>

        <div className="col content">
          <div className="weatherForecast-day">Fri</div>
          <div className="weatherForecast-time">time</div>
          <div className="weatherForecast-icon">
            <img
              src={props.forecast.iconUrl}
              alt={props.forecast.description}
            />
          </div>
          <div className="weatherForecast-Temps">
            {" "}
            <span className="weatherForecast-maxtemp">35°</span>
            <span className="weatherForecast-mintemp">31°</span>
          </div>
        </div>

        <div className="col content">
          <div className="weatherForecast-day">Sat</div>
          <div className="weatherForecast-time">time</div>
          <div className="weatherForecast-icon">
            <img
              src={props.forecast.iconUrl}
              alt={props.forecast.description}
            />
          </div>
          <div className="weatherForecast-Temps">
            {" "}
            <span className="weatherForecast-maxtemp">35°</span>
            <span className="weatherForecast-mintemp">31°</span>
          </div>
        </div>

        <div className="col content">
          <div className="weatherForecast-day">Sun</div>
          <div className="weatherForecast-time">time</div>
          <div className="weatherForecast-icon">
            <img
              src={props.forecast.iconUrl}
              alt={props.forecast.description}
            />
          </div>
          <div className="weatherForecast-Temps">
            {" "}
            <span className="weatherForecast-maxtemp">35°</span>
            <span className="weatherForecast-mintemp">31°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
