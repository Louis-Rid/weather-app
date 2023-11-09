import { useEffect, useState } from "react";
import WeeklyTempItem from "../WeeklyTempItem/WeeklyTempItem";
import "./weeklyTemp.css";

function WeeklyTemp({ data }) {
  const [weekTemp, setWeekTemp] = useState([]);

  const weatherList = weekTemp.map((dayData, index) => (
    <WeeklyTempItem
      max={dayData[0]}
      min={dayData[1]}
      day={dayData[2]}
      key={index}
    />
  ));

  // Updates weather for the week
  useEffect(() => {
    setWeekTemp([]);
    if (data) {
      var weekArr = data.daily;
      var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      for (let i = 0; i < weekArr.length; i++) {
        var date = new Date(weekArr[i].dt * 1000);
        let curDay = weekDays[date.getDay()];
        let roundMax = Math.round(weekArr[i].temp.max);
        let roundMin = Math.round(weekArr[i].temp.min);
        setWeekTemp((prev) => [...prev, [roundMax, roundMin, curDay]]);
      }
    }
  }, [data]);

  return <div className="wt--container">{weatherList}</div>;
}

export default WeeklyTemp;
