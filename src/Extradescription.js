import React from "react";

export default function Extradescription() {
  return (
    <div className="windSpeed">
      <p className="mb-1">
        Wind: {" "}
        <span id="windeck">3.01</span>
        <strong>km/h</strong>, Humidity: {" "}
        <span id="humidity">73</span>
        <strong>%</strong>
      </p>
      <p className="date"><strong>Thursday 19:11</strong></p>
    </div>
  );
}
