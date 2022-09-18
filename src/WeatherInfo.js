import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.name}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
            <li>
              Humidity:
              <span className="humidity"> {props.data.humidity} %, </span>
              Wind:{" "}
              <span className="wind">{Math.round(props.data.wind)} km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={56} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
