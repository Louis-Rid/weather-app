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

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Where Are You</h2>
      <button onClick={geoFindMe}>Use my location</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Location</label>
        <input id="location" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default WhereAreYou;
