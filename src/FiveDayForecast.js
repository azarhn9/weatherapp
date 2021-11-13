import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./FiveDayForecast.css";
import axios from "axios";
import ShowForecast from "./ShowForecast";

export default function FiveDayForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.data.coordinates]);

  function handleForecastResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
    return null;
  }
  if (ready) {
    return (
      <div className="row five-day-forecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col-2 daily-forecast" key={index}>
                <ShowForecast data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let lon = props.data.coordinates.lon;
    let lat = props.data.coordinates.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=894a2e7aa7f46eeca5d8778f6faa5a5b`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}