import React from 'react'
import { CityWeatherParams } from "../../hooks/useFetchWeather";

interface WeatherProps {
  weather?: CityWeatherParams;
}

const Weather = (props: WeatherProps) => {
  const { weather } = props;

  return (
    <>
      <div className="city-name">{weather?.name}</div>
      <div className="city-weather">
        <div className="city-img">
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt={weather?.weather[0].main}
          />
          <div className="city-desc">{weather?.weather[0].description}</div>
        </div>
        <div>
          <div className="city-weather-detail">
            Temperature: {weather?.main.temp} K
          </div>
          <div className="city-weather-detail">
            Humidity: {weather?.main.humidity} %
          </div>
          <div className="city-weather-detail">
            Pressure: {weather?.main.pressure} Pa
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
