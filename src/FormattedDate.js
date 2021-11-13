import React from "react";
import "./FormattedDate.css";

export default function FormattedDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let now = new Date();
  let currentDay = days[now.getDay()];
  let currentMonth = months[now.getMonth()];
  let hour = ("0" + now.getHours()).slice(-2);
  let minutes = ("0" + now.getMinutes()).slice(-2);
  let dayNumber = now.getDate();
  let year = now.getFullYear();

  return (
    <div className="col calender-day">
      <div className="col day-and-time">
        {currentMonth} {dayNumber} {year}
      </div>
      <span>
        {currentDay} {hour}:{minutes}
      </span>
    </div>
  );
}