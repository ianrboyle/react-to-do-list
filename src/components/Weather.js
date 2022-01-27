import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Calculator from "./Calculator";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
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
        setWeatherData({ main: data.main, weather: data.weather });
        console.log("data: ", weatherData.main.temp);
        console.log(data.base);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div className="input-container">
        <input type="text" onChange={handleChange} name="city" value={city} onKeyDown={handleKeyDown} />
        {/* {weatherData !== null && <WeatherInfo weatherData={weatherData} />} */}
        {/* {weatherData && <WeatherInfo weatherData={weatherData} />} */}
        <Calculator />
      </div>
    </div>
  );
};

export default Weather;
