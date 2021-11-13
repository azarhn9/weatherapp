import React from "react";
import "./Conversion.css";

export default function Conversion(props) {
  return (
    <h2 className="conversion">
      <span className="current-temperature">{props.celsiusTemp}</span>
      <span className="cf-symbol">°C</span>
    </h2>
  );
}