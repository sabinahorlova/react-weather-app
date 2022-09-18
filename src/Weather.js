import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              class="form-control search-input"
              autoFocus={true}
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn w-100" value="Search" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h1></h1>
          <ul>
            <li></li>
            <li>
              Humidity:
              <span className="humidity">%</span>
            </li>
            <li>
              Wind: <span className="wind">km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img src="" alt="" />
          <span className="temperature"></span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
