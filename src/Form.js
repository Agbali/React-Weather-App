import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.country,
      iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png",
      description: response.data.condition.description,
      date: response.data.temperature.time
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div>
          <form className="container">
            <input
              className="form_control"
              type="search"
              placeholder="Enter for a City.."
              autoFocus="on"
            />
            <input type="submit" value="Search" className="submitBut" />
          </form>
        </div>
        <div className="container">
          <div className="row">
            <div className="col countryName">
              <h1 id="lagosHaiD">{weatherData.city}</h1>
            </div>
            <div className="Col-6"></div>
            <div className="Col"></div>
          </div>

          <div className="row degree_col">
            <div className="col-10">
              <span className="temp-degree" id="symbol">
                {Math.round(weatherData.temperature)}
              </span>
              <a href="/" className="celsius_unit" id="Celsius-unit">
                °C
              </a>
            </div>

            <div className="col-2">
              <div>
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="w-icon"
                  className="weather_icon text-capitalize"
                />
                <div>
                  <p id="weatherDescr" className="weatherDescription">
                    Full Cloud
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <ul className="windSpeed">
                <li>
                  Wind: <span id="windeck">{weatherData.wind}</span>
                  <strong>km/h</strong>, Humidity:{" "}
                  <span id="humidity">{weatherData.humidity}</span>
                  <strong>%</strong>
                </li>
                <li className="mt-1">{weatherData.date}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <button className="onlyButt mb-4">Location</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ee0352b1690bae3d49da0obbbf5t2a26";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultcity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (<p>"Loading.."</p>)
  }
}

