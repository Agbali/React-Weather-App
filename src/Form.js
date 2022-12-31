import React, { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);

  function handleResponse(response) {
    console.log(response.data);
    //the setWeatherData is one of the const functions in the useState as seen in line 8 but it can also contain 
    //an object which are as seen below. These objects store the responses from the API and we can call them anywhere
    //in the code with setWeatherData.ready
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.country,
      iconUrl:
        `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    //the function that houses the API without this, the whole code will not run
    const apiKey = "ee0352b1690bae3d49da0obbbf5t2a26";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //prevents the page from reloading

    //search for a city function that will call the API
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    //collects the value gotten from the form and stores it in the setCity useState
  }
  if (weatherData.ready) {
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit} className="container">
            <input
              className="form_control"
              type="search"
              placeholder="Enter for a City.."
              autoFocus="on"
              onChange={handleCityChange}
              //calling a function that picks the input of data in the form
            />
            <input type="submit" value="Search" className="submitBut" />
          </form>
        </div>
       { /* To be able to create this as a component, we create a component and pass in a property. this property
        collects the weatherData function from the useState so that we can access it in another js file */}
        <WeatherInfo data={weatherData} />
        <div>
          <div className="row">
            <div className="col-2 ms-2">
              <button className="onlyButt mb-4">Location</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="sweet-loading">
        <ClipLoader
          color="#000000"
          cssOverride={""}
          loading={true}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={1}
        />
      </div>
    );
  }
}
