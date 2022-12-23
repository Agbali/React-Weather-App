import React from "react";
import Icondescription from "./Icondescription";

export default function Temperature() {
  return (
    <div className="row degree_col">
      <div className="col-10">
        <span className="temp-degree" id="symbol">
          25
        </span>
        <a href="/" className="celsius_unit" id="Celsius-unit">
        °C
        </a>
      </div>
     
      <div className="col-2">
        <Icondescription />
      </div>
    </div>
  );
}
