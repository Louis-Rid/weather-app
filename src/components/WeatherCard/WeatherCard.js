import { useEffect, useState } from "react";

function WeatherCard({ coords, curCity }) {
  const [weatherData, setWeatherData] = useState(null);
  const [curTemp, setCurTemp] = useState(null);
  const [hourlyTemp, setHourlyTemp] = useState([]);
  const [weekTemp, setWeekTemp] = useState([]);

  // Gathers Weather Data From API
  useEffect(() => {
    var key = "c568bd89839442dcdacafd920438a959";
    var endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${coords[0]}&lon=${coords[1]}&units=imperial&appid=${key}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        var roundTemp = Math.round(data.current.temp);
        setCurTemp(roundTemp);
        setWeatherData(data);
      })
      .catch((error) => console.error(error));
  }, [coords]);

  // Updates weather for the week
  useEffect(() => {
    setWeekTemp([]);
    if (weatherData) {
      var weekArr = weatherData.daily;
      var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      for (let i = 0; i < weekArr.length; i++) {
        var date = new Date(weekArr[i].dt * 1000);
        let curDay = weekDays[date.getDay()];
        let roundMax = Math.round(weekArr[i].temp.max);
        let roundMin = Math.round(weekArr[i].temp.min);
        setWeekTemp((prev) => [...prev, [roundMax, roundMin, curDay]]);
      }
    }
  }, [weatherData]);

  // Updates weather for every hour
  useEffect(() => {
    setHourlyTemp([]);
    if (weatherData) {
      var hourlyArr = weatherData.hourly;

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
  }, [weatherData]);

  return (
    <div>
      {/* Current Temp */}
      <div>
        <h2>Current Temp</h2>
        <p>{curTemp}</p>
        <p>{curCity}</p>
      </div>
      {/* Hourly Temp */}
      <h2>Hourly Temp</h2>
      {hourlyTemp.map((hour) => `${hour[0]} ${hour[1]}° ||| `)}
      {/* Weekly Temp */}
      <h2>Weekly Temp</h2>
      {weekTemp.map((day) => `${day[2]} ${day[0]}°/${day[1]}° `)}
    </div>
  );
}

export default WeatherCard;
