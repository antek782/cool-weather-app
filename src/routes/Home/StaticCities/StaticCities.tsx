import React from "react";
import { Link } from "react-router-dom";

interface StaticCitiesProps {
  cities: string[];
}

const StaticCities = (props: StaticCitiesProps) => {
  const { cities } = props;

  return (
    <div className="home-static-cities-container">
      {cities.map((city) => (
        <Link key={city} className="home-city-card" to={`/city/${city}`}>
          {city}
        </Link>
      ))}
    </div>
  );
};

export default StaticCities;
