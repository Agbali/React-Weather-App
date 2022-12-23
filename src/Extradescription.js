import React from "react";
import "./Extradescription.css";

export default function Extradescription() {
  return (
    <ul className="windSpeed">
      <li>
        Wind: {" "}
        <span id="windeck">3.01</span>
        <strong>km/h</strong>, Humidity: {" "}
        <span id="humidity">73</span>
        <strong>%</strong>
      </li>
      <li className="mt-1">Thursday 19:11</li>
    </ul>
  );
}
