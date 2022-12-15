import React from "react";
//import axios from "axios";
// import { ThreeDots } from "react-loader-spinner";

export default function Weather() {
  return (
    <div className="row ">
      <div className="col-2 content ms-5">
        <div className="row">Mon</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="iconicules"
          width="50"
          className="row"
        />
        <div className="row">35°</div>
      </div>

      <div className="col-2 content">
        <div className="row">Tue</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="iconicules"
          width="50"
          className="row"
        />
        <div className="row">35°</div>
      </div>

      <div className="col-2 content">
        <div className="row">Wed</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="iconicules"
          width="50"
          className="row"
        />
        <div className="row">35°</div>
      </div>

      <div className="col-2 content">
        <div className="row">Thu</div>
        <img
          src="http://openweathermap.org/img/wn/03d@2x.png"
          alt="iconicules"
          width="50"
          className="row"
        />
        <div className="row">35°</div>
      </div>

      <div className="col-2 content">
        <div className="row">Fri</div>
        <img
          src="http://openweathermap.org/img/wn/04d@2x.png"
          alt="iconicules"
          width="50"
          className="row"
        />
        <div className="row">35°</div>
      </div>

      <div className="col-2 content">
        <div className="row">Sat</div>
        <img
          src="http://openweathermap.org/img/wn/04d@2x.png"
          alt="iconicules"
          width="50"
          className="row"
        />
        <div className="row">36°</div>
      </div>
    </div>
  );
}