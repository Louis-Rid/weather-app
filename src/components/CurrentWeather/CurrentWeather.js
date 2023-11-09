import { useEffect, useState } from "react";
import "./currentWeather.css";

function CurrentWeather({ coords, curCity, data }) {
  const [curTemp, setCurTemp] = useState(null);

  // Gathers Weather Data From API
  useEffect(() => {
    if (data) {
      var roundTemp = Math.round(data.current.temp);
      setCurTemp(roundTemp);
    }
  }, [coords, data]);
  return (
    <div className="cw--container">
      <div>
        {/* <h2>Current Temp</h2> */}
        <p className="cw--temp">{curTemp}</p>
        <p className="cw--city">{curCity}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
