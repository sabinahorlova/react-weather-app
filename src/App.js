import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Kyiv" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://golden-marigold-44ac0f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sabina Horlova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sabinahorlova/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GetHub
          </a>
        </footer>
      </div>
    </div>
  );
}
