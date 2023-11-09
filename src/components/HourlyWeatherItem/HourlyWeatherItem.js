import "./hourlyWeatherItem.css";

function HourlyWeatherItem({ time, temp, key }) {
  return (
    <div key={key} className="hwi--container">
      <span className="hwi--temp">{temp}˚</span>
      <span className="hwi--time">{time}</span>
    </div>
  );
}

export default HourlyWeatherItem;
