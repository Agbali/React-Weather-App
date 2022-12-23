import React from "react";

export default function Form() {
  return (
    <div>
      <form className="container">
        <input
          className="form_control"
          type="search"
          placeholder="Enter for a City.."
          autoFocus="on"
        />
        <input type="submit" value="Search" className="submitBut" />
      </form>
    </div>
  );
}
