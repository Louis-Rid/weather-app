import { useState } from "react";
import "./index.css";

import WeatherCard from "./components/WeatherCard/WeatherCard";
import WhereAreYou from "./components/WhereAreYou/WhereAreYou";
import Geocode from "./components/reverseGeocoding";

function App() {
  const [location, setLocation] = useState(["40.73", "-73.93"]);
  const [cityName, setCityName] = useState("");

  return (
    <div className="app">
      <WhereAreYou setCoords={setLocation} />
      <WeatherCard coords={location} curCity={cityName} />
      <Geocode coords={location} setCity={setCityName} />
    </div>
  );
}

export default App;
