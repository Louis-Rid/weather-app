import { useEffect, useState } from "react";

function WeatherCard() {
  const [curTemp, setCurTemp] = useState(null);
  const [weekTemp, setWeekTemp] = useState([]);

  function extractWeekTemp(weekArr) {
    for (let i = 0; i < weekArr.length; i++) {
      let roundMax = Math.round(weekArr[i].temp.max);
      let roundMin = Math.round(weekArr[i].temp.min);
      setWeekTemp((prev) => [...prev, [roundMax, roundMin]]);
    }
  }

  useEffect(() => {
    var key = "c568bd89839442dcdacafd920438a959";
    var endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=38.859055&lon=-104.813499&units=imperial&appid=${key}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        var roundTemp = Math.round(data.current.temp);
        setCurTemp(roundTemp);
        extractWeekTemp(data.daily);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {/* Current Temp */}
      <div>
        <h2>Current Temp</h2>
        {curTemp}
      </div>
      {/* Hourly Temp */}
      {/* Weekly Temp */}
      <h2>Weekly Temp</h2>
      {weekTemp.map((val) => `${val[0]}/${val[1]} `)}
    </div>
  );
}

export default WeatherCard;
