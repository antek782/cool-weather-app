import { useEffect, useState } from "react";

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CityWeatherParams {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: string;
}

interface CityError {
  cod: string;
  message: string;
}

const useFetchWeather = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState<CityWeatherParams>();
  const [error, setError] = useState<string>("");

  const isError = (
    response: CityWeatherParams | CityError
  ): response is CityError => {
    return response.cod === "404";
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchWeather = async () => {
      const response = await fetch(url);

      const weather: CityWeatherParams | CityError = await response.json();

      if (isError(weather)) {
        setError(weather.message);
      } else {
        setWeather(weather);
      }
      setIsLoading(false);
    };

    fetchWeather();
  }, [url]);

  return { isLoading, weather, error };
};

export default useFetchWeather;
