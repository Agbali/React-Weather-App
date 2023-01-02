import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {

  console.log(props.forecast.coordinates);
  //We are calling the cordinates property from Form component and console logging to see if it works
  function handleResponse(response) {
    console.log(response.data);
    
  }
  let apiKey = "ee0352b1690bae3d49da0obbbf5t2a26";
  //We are calling the cordinates property from Form component and passing it as a the longitude and latitude of the
  // Forecast API
  let lon = props.forecast.coordinates.longitude;
  let lat = props.forecast.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
