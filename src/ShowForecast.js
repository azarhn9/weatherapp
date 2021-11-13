import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import "./ShowForecast.css";

export default function ShowForecast(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dateNumber = new Date(props.data.dt * 1000);
  let date = days[dateNumber.getDay()];
  let description = props.data.weather[0].description;
  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);
  let icon = props.data.weather[0].icon;

  return (
    <div>
      <span className="day">{date}</span>
      <div className="forecast-description">{description}</div>
      <div className="forecast-icons">
        <WeatherIcon icon={icon} size={70} />
      </div>
      <div className="forecast-temperature">
        {maxTemp}°<span className="slash"> / </span>
        <span className="low-temp"> {minTemp}°</span>
      </div>
    </div>
  );
}