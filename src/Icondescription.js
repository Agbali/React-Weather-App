import React from "react";
import logo from "./cloud-solid.svg";

export default function Icondescription() {
  return (
    <div>
      <img src={logo} alt="icon" id="w-icon" className="source" />
      <div>
        <p id="weatherDescr" className="weatherDescription">
          <span> Full Cloud</span>
        </p>
      </div>
    </div>
  );
}
