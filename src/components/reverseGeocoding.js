import { useEffect } from "react";

function Geocode({ coords, setCity }) {
  let endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords[0]},${coords[1]}&key=AIzaSyDTDLxu3BJ0RYzrteBUG_RY8z1UkvCHCv0`;

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        let city = data.results[0].address_components[2].long_name;
        let state = data.results[0].address_components[5].short_name;
        setCity(`${city}, ${state}`);
      });
  }, [coords]);
}

export default Geocode;
