import React, { useState } from "react";
import "./App.css";
import Icondescription from "./Icondescription";
import axios from "axios";

export default function Form() {
  const [ready, setReady] = useState(false);
  const [temp, showTemp] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    showTemp(response.data.temperature.current);
    setReady(true);
  }

  if (ready) {
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
              <h1 id="lagosHaiD">Lagos</h1>
            </div>
            <div className="Col-6"></div>
            <div className="Col"></div>
          </div>

          <div className="row degree_col">
            <div className="col-10">
              <span className="temp-degree" id="symbol">
                {Math.round(temp)}
              </span>
              <a href="/" className="celsius_unit" id="Celsius-unit">
                °C
              </a>
            </div>

            <div className="col-2">
              <Icondescription />
            </div>
          </div>
          <div className="row">
            <div>
              <ul className="windSpeed">
                <li>
                  Wind: <span id="windeck">3.01</span>
                  <strong>km/h</strong>, Humidity: <span id="humidity">73</span>
                  <strong>%</strong>
                </li>
                <li className="mt-1">Thursday 19:11</li>
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
    let city = "lagos";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
