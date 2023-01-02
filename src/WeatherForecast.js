import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setloaded] = useState(false);
  const [forecast, setforecast] = useState(null);

  useEffect(() => {
    //set loaded to false using useEffects
    setloaded(false);
  }, [props.forecast.coordinates]); //only when the props.cordinates change

  function handleResponse(response) {
    //console.log(response.data);
    setforecast(response.data.daily);
    setloaded(true);
  }

  function load() {
    let apiKey = "ee0352b1690bae3d49da0obbbf5t2a26";
    //We are calling the cordinates property from Form component and passing it as a the longitude and latitude of the
    // Forecast API
    let lon = props.forecast.coordinates.longitude;
    let lat = props.forecast.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="row weatherForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col content" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return "Loading. . .";
  }
}
