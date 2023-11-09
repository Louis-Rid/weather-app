import "./whereAreYou.css";

function WhereAreYou({ setCoords }) {
  function geoFindMe(e) {
    const success = (position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setCoords([lat, lng]);
      console.log("success");
    };

    const error = () => {
      console.log("error");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <div className="way--container">
      <h2>Where Are You?</h2>
      <button onClick={geoFindMe}>Use my location</button>
    </div>
  );
}

export default WhereAreYou;
