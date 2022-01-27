import React from "react";

const WeatherInfo = (props) => {
  return (
    <div>
      <p>Wather info:</p>
      <p>{props.weatherData.main.temp}</p>
    </div>
  );
};

export default WeatherInfo;
