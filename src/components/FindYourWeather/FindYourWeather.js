import "./findYourWeather.css";

function FindYourWeather({ setCoords, updateLoading }) {
  function geoFindMe() {
    updateLoading(true);

    const success = (position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setCoords([lat, lng]);
      updateLoading(false);
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
      <h1>Find Your Weather</h1>
      <button onClick={geoFindMe}>Use my location</button>
    </div>
  );
}

export default FindYourWeather;
