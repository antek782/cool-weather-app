import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useGeolocation, useSearch } from "../../hooks";
import StaticCities from "./StaticCities";

interface HomeProps {
  cities: string[];
}

const Home = (props: HomeProps) => {
  const { cities } = props;

  const [search, setSearch] = useState("");

  const history = useHistory();
  const coordinates = useGeolocation();

  const inputRef = useRef<HTMLInputElement>(null);

  const filteredData = useSearch(search, cities);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      inputRef.current?.focus();
      return;
    }
    history.push(`city/${search}`);
  };

  const autocompleteCityClickHandler = (item: string) => {
    setSearch(item);
  };

  return (
    <div className="home-container">
      <h1>Get current weather for any city</h1>
      <form className="home-form" onSubmit={onSubmitHandler}>
        <div className="home-from-autocomplete">
          <input
            className="home-form-input"
            type="text"
            placeholder="Type a city.."
            onChange={searchChangeHandler}
            value={search}
            ref={inputRef}
          />
          <button className="home-form-btn" type="submit">
            Search
          </button>
          <div className="home-form-autocomplete-items">
            {filteredData.map((item) => (
              <div
                key={item}
                className="home-form-autocomplete-item"
                onClick={() => autocompleteCityClickHandler(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </form>

      <StaticCities
        cities={["New York", "Oslo", "Hamburg", "Sydney", "Moscow"]}
      />

      {coordinates !== undefined && (
        <Link
          className="home-current-location-link"
          to={`/coordinates/${coordinates.lat}/${coordinates.long}`}
        >
          <div className="home-current-location">
            Check the weather in your location!
          </div>
        </Link>
      )}
    </div>
  );
};

export default Home;
