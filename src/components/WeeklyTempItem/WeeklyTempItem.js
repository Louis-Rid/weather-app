import "./weeklyTempItem.css";

function WeeklyTempItem({ max, min, day }) {
  return (
    <div className="wti--container">
      <span>{day}</span>
      <span>
        <span className="wti--max">{max}˚</span>/
        <span className="wti--min">{min}˚</span>
      </span>
    </div>
  );
}

export default WeeklyTempItem;
