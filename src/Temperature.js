import React from "react";

export default function Temperature() {
    return (
      <h2 id="temp">
        <span class="removeColor" id="symbol"></span>
        <span class="removeColor" title="convert to Fanrenheit"></span>
        <button href="#" class="inCelsius" id="Celsius-link">
          C
        </button>
      </h2>
    );
  }
  