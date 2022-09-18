import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>

        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://golden-marigold-44ac0f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Sabina Horlova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sabinahorlova/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GetHub
          </a>
        </footer>
      </div>
    </div>
  );
}
