import React from "react";

export default function Extradescription() {
    return (
      <div>
        <p class="windSpeed">
          Wind:
          <span id="windeck"></span>
          <strong>km/h</strong>, Humidity:
          <span id="humidity"></span>
          <strong>%</strong>
        </p>
      </div>
    );
  }
  