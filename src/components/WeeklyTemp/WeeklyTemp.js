import { useEffect, useState } from "react";

function WeeklyTemp({ data }) {
  const [weekTemp, setWeekTemp] = useState([]);

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

  return (
    <div>
      <h2>Weekly Temp</h2>
      {weekTemp.map((day) => `${day[2]} ${day[0]}°/${day[1]}° `)}
    </div>
  );
}

export default WeeklyTemp;
