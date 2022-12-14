import React from "react";
// import axios from "axios";
// import { ThreeDots } from "react-loader-spinner";

export default function Weather() {
  return (
    <div class="row">
      <div class="col-2 content ms-2">
        <div class="row">Mon</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          width="70"
          class="row iconLocation"
        />
        <div class="row">35°</div>
      </div>

      <div class="col-2 content">
        <div class="row">Tue</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          width="70"
          class="row iconLocation"
        />
        <div class="row">35°</div>
      </div>

      <div class="col-2 content">
        <div class="row">Wed</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          width="70"
          class="row iconLocation"
        />
        <div class="row">35°</div>
      </div>

      <div class="col-2 content">
        <div class="row">Thu</div>
        <img
          src="http://openweathermap.org/img/wn/03d@2x.png"
          alt=""
          width="70"
          class="row iconLocation"
        />
        <div class="row">35°</div>
      </div>

      <div class="col-2 content">
        <div class="row">Fri</div>
        <img
          src="http://openweathermap.org/img/wn/04d@2x.png"
          alt=""
          width="70"
          class="row iconLocation"
        />
        <div class="row">35°</div>
      </div>

      <div class="col-2 content">
        <div class="row">Sat</div>
        <img
          src="http://openweathermap.org/img/wn/04d@2x.png"
          alt=""
          width="70"
          class="row iconLocation"
        />
        <div class="row">36°</div>
      </div>
    </div>
  );
}

// export default function Weather(props) {
//   function handleResponse(response) {
//     alert(
//       `The weather in ${response.data.name} is ${response.data.main.temp}°C`
//     );
//   }

//   let apiKey = "76a578de3ab86388efb5bf00ea5c9bf1";
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
//   axios.get(url).then(handleResponse);

//   return <ThreeDots
//     height="80"
//     width="80"
//     radius="9"
//     color="#4fa94d"
//     ariaLabel="three-dots-loading"
//     wrapperStyle={{}}
//     wrapperClassName=""
//     visible={true}
//   />;
// }
