import { useEffect } from "react";
import getWeatherData from "../utils/getWeatherData";

function Geocode({ coords, setCity }) {
  let endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords[0]},${coords[1]}&key=YOUR_API_KEY`;

  useEffect(() => {
    getWeatherData(endpoint, setCity);
  }, [coords]);
}

export default Geocode;
