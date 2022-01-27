import React from "react";

const WeatherInfo = (props) => {
  return (
    <div>
      <p>Hello</p>
      <p>{props.weatherData.main.temp}</p>
    </div>
  );
};

export default WeatherInfo;
