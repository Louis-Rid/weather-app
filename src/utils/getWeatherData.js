function getWeatherData(endpoint, setCity) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      let city = data.results[0].address_components[2].long_name;
      let state = data.results[0].address_components[5].short_name;
      setCity(`${city}, ${state}`);
      return [city, state];
    });
}

export default getWeatherData;
