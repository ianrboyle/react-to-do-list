import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
    console.log(city);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getWeather();
    }
  };
  const getWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log("data: ", weatherData);
        console.log(typeof data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div className="input-container">
        <input type="text" onChange={handleChange} name="city" value={city} onKeyDown={handleKeyDown} />
        {/* {weatherData.length > 0 && <WeatherInfo weatherData={weatherData} />} */}
        {weatherData.length > 0 ? <p>{weatherData.name}</p> : null}
        <WeatherInfo weatherData={weatherData} />
      </div>
    </div>
  );
};

export default Weather;
