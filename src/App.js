import { useState } from "react";
import { TailSpin } from "react-loading-icons";
import "./index.css";

import WeatherCard from "./components/WeatherCard/WeatherCard";
import FindYourWeather from "./components/FindYourWeather/FindYourWeather";
import Geocode from "./components/reverseGeocoding";

function App() {
  const [location, setLocation] = useState(["40.73", "-73.93"]);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      {!loading ? (
        <div>
          <FindYourWeather setCoords={setLocation} setLoading={setLoading} />
          <WeatherCard coords={location} curCity={cityName} />
          <Geocode coords={location} setCity={setCityName} />
        </div>
      ) : (
        <div className="loaderWrapper">
          <TailSpin />
        </div>
      )}
    </div>
  );
}

export default App;
