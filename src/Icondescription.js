import React from "react";
import logo from "./cloud-solid.svg";

export default function Icondescription() {
  return (
    <div>
      <img src={logo} alt="icon" id="w-icon" className="weather_icon" />
      <div>
        <p id="weatherDescr" className="weatherDescription">
          Full Cloud
        </p>
      </div>
    </div>
  );
}
