import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loader } from "./components";
import { useLoadCities } from "./hooks";

const Home = React.lazy(() => import("./routes/Home"));
const CityWeather = React.lazy(() => import("./routes/CityWeather"));
const CoordinatesWeather = React.lazy(
  () => import("./routes/CoordinatesWeather")
);
const PageNotFound = React.lazy(() => import("./routes/PageNotFound"));

const App = () => {
  const cities = useLoadCities();

  return (
    <Router>
      <div className="app-container">
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/city/:city" component={CityWeather} exact />
            <Route
              path="/coordinates/:lat/:long"
              component={CoordinatesWeather}
              exact
            />
            <Route path="/" exact>
              <Home cities={cities} />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;
