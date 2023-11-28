import { useEffect } from "react";
import getWeatherData from "../utils/getWeatherData";

function Geocode({ coords, setCity }) {
  let endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords[0]},${coords[1]}&key=AIzaSyDTDLxu3BJ0RYzrteBUG_RY8z1UkvCHCv0`;

  useEffect(() => {
    getWeatherData(endpoint, setCity);
  }, [coords]);
}

export default Geocode;
