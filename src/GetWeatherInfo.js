import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import ShowWeather from "./ShowWeather";
import FiveDayForecast from "./FiveDayForecast";
import "./GetWeatherInfo.css";

export default function GetWeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, SetCity] = useState(props.defaultCity);

  function searchCity() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=894a2e7aa7f46eeca5d8778f6faa5a5b`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    SetCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <ShowWeather weatherInfo={weatherData} />
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-md-center search-buttons-bar">
            <div className="col col-lg-5 search-bar">
              <input
                type="search"
                className="enter-city-name form-control shadow-sm"
                placeholder="Enter city name"
                autoFocus="on"
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-md-auto search-input-button">
              <input
                type="submit"
                value="Search"
                className="search-button shadow-sm"
              />
            </div>
          </div>
        </form>
        <FiveDayForecast data={weatherData} />
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=894a2e7aa7f46eeca5d8778f6faa5a5b`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}