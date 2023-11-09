import "./findYourWeather.css";

function FindYourWeather({ setCoords, setLoading }) {
  function geoFindMe() {
    setLoading(true);

    const success = (position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setCoords([lat, lng]);
      setLoading(false);
    };

    const error = (e) => {
      alert(
        "There was an error. Please check your internet connection. Then reload the page."
      );
      console.log(e);
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <div className="way--container">
      <h2>Find Your Weather</h2>
      <button onClick={geoFindMe}>Use my location</button>
    </div>
  );
}

export default FindYourWeather;
