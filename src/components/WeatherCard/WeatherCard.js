import { useEffect, useState } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import WeeklyTemp from "../WeeklyTemp/WeeklyTemp";

function WeatherCard({ coords, curCity }) {
  const [weatherData, setWeatherData] = useState(null);
  const [weekTemp, setWeekTemp] = useState([]);

  // Gathers Weather Data From API
  useEffect(() => {
    var key = "YOUR_API_KEY";
    var endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${coords[0]}&lon=${coords[1]}&units=imperial&appid=${key}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.error(error));
  }, [coords]);

  return (
    <div>
      {/* Current Temp */}
      <CurrentWeather coords={coords} curCity={curCity} data={weatherData} />
      {/* Hourly Temp */}
      <HourlyWeather data={weatherData} />
      {/* Weekly Temp */}
      <WeeklyTemp data={weatherData} />
    </div>
  );
}

export default WeatherCard;
