import { useEffect, useState } from "react";
import data from "../data/cities.json";

interface Id {
  $numberLong: string;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Zoom {
  $numberLong: string;
}

interface CityDetails {
  id: Id;
  name: string;
  findname: string;
  country: string;
  coord: Coord;
  zoom: Zoom;
}

export interface City {
  id: number;
  city: CityDetails;
}

const useLoadCities = (): string[] => {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const cities = (data as City[]).map((city) => city.city.name);
    const citiesWithoutDuplicates = cities.filter((c, index) => {
      return cities.indexOf(c) === index;
    });

    setCities(citiesWithoutDuplicates);
  }, []);

  return cities;
};

export default useLoadCities;
