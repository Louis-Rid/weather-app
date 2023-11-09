import { useEffect, useState } from "react";

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
    <div>
      <div>
        <h2>Current Temp</h2>
        <p>{curTemp}</p>
        <p>{curCity}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
