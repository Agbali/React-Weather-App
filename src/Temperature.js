import React from "react";

export default function Temperature() {
    return (
      <h2 id="temp">
        <span className="removeColor" id="symbol">25°</span>
        <span className="removeColor" title="convert to Fanrenheit"></span>
        <a href="/" className="inCelsius" id="Celsius-link">
          C
        </a>
      </h2>
    ); 
  }
  