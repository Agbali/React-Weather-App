import React from "react";
import Extradescription from "./Extradescription";
import Temperature from "./Temperature";
import Country from "./Country";

export default function Forecast() {
  return (
    <div class="col-10 lagos_f">
      <Country />

      <Temperature />
      <Extradescription />

      <h3 id="theDate"></h3>

      <button class="onlyButt">Location</button>
    </div>
  );
}
