import { useEffect, useState } from "react";

function HourlyWeather({ data }) {
  const [hourlyTemp, setHourlyTemp] = useState([]);

  // Updates weather for every hour
  useEffect(() => {
    setHourlyTemp([]);
    if (data) {
      var hourlyArr = data.hourly;

      for (let i = 0; i < 24; i++) {
        let cur = hourlyArr[i];
        let timestamp = new Date(cur.dt * 1000);
        let time = new Date(timestamp.getTime());
        let timeString = time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        let temp = Math.round(cur.temp);

        setHourlyTemp((prev) => [...prev, [timeString, temp]]);
      }
    }
  }, [data]);

  return (
    <div>
      <h2>Hourly Temp</h2>
      {hourlyTemp.map((hour) => `${hour[0]} ${hour[1]}° `)}
    </div>
  );
}

export default HourlyWeather;
