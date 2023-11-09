import { useEffect, useState } from "react";
import HourlyWeatherItem from "../HourlyWeatherItem/HourlyWeatherItem";
import "./hourlyWeather.css";

function HourlyWeather({ data }) {
  const [hourlyTemp, setHourlyTemp] = useState([]);

  const weatherList = hourlyTemp.map((hour, index) => {
    return <HourlyWeatherItem time={hour[0]} temp={hour[1]} key={index} />;
  });

  // Updates weather for every hour
  useEffect(() => {
    setHourlyTemp([]);
    if (data) {
      var hourlyArr = data.hourly;

      for (let i = 0; i < 24; i++) {
        let cur = hourlyArr[i];
        let date = new Date(cur.dt * 1000);
        let hours =
          date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        let time = hours + ":00";
        let temp = Math.round(cur.temp);

        setHourlyTemp((prev) => [...prev, [time, temp]]);
      }
    }
  }, [data]);

  return (
    <div className="hw--container">
      <div className="hw--innerContainer">{weatherList}</div>
    </div>
  );
}

export default HourlyWeather;
