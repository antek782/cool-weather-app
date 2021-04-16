import React from "react";
import { Link, useParams } from "react-router-dom";
import { Loader, Weather } from "../../components";
import { WEATHER_API } from "../../constants/api";
import { useFetchWeather } from "../../hooks";

interface ParamTypes {
  lat: string;
  long: string;
}

const CoordinatesWeather = () => {
  const { lat, long } = useParams<ParamTypes>();

  const { error, isLoading, weather } = useFetchWeather(
    `${WEATHER_API}?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  if (isLoading) return <Loader />;

  return (
    <div className="city-container">
      {error ? <div>{error}</div> : <Weather weather={weather} />}

      <Link className="link-back" to="/">
        Go back
      </Link>
    </div>
  );
};

export default CoordinatesWeather;
