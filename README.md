<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">WEATHER-APP</h1>
</p>
<p align="center">
    <em>Seize the Forecast: Weather Simplified</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/Louis-Rid/weather-app?style=flat&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Louis-Rid/weather-app?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Louis-Rid/weather-app?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running weather-app](#-running-weather-app)
>   - [🧪 Tests](#-tests)

---

## 📍 Overview

The weather-app project is a web application that provides real-time weather information for a user's location. It leverages the React library and Axios for data retrieval, with the Google Geocoder library used for location lookup. The app allows users to find weather details about their location. The core value proposition of this project is its simplicity and ease of use, providing users with quick access to weather information for there location.

---

## 📦 Features

|     | Feature          | Description                                                                                                                                                                                                                                                                                        |
| --- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture** | The project follows a frontend architecture using React.js framework. It uses various components such as CurrentWeather.js, WeatherCard.js, WeeklyTemp.js, HourlyWeatherItem.js, and Geocode.js to achieve different functionalities. It also includes CSS stylesheets for styling the components. |
| 🔌  | **Integrations** | The project has dependencies on external libraries and frameworks such as React.js, react-loading-icons, and react-scripts. These integrations provide additional functionality to the project.                                                                                                    |
| 🧪  | **Testing**      | The project uses Jest as the testing framework.                                                                                                                                                                                                                                                    |
| 📦  | **Dependencies** | The project includes dependencies such as react, jest, and react-scripts. These dependencies provide essential functionality and tools for building and testing React applications.                                                                                                                |

---

## 📂 Repository Structure

```sh
└── weather-app/
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.js
        ├── __tests__
        │   └── findYourWeather.test.js
        ├── components
        │   ├── CurrentWeather
        │   ├── FindYourWeather
        │   ├── Geocode.js
        │   ├── HourlyWeather
        │   ├── HourlyWeatherItem
        │   ├── WeatherCard
        │   ├── WeeklyTemp
        │   └── WeeklyTempItem
        ├── index.css
        ├── index.js
        ├── setupTests.js
        └── utils
            └── getWeatherData.js
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [package-lock.json](https://github.com/Louis-Rid/weather-app/blob/master/package-lock.json) | This code snippet contributes to the weather-app repository's architecture by implementing a feature that allows users to find current weather based on location. It is responsible for handling the logic and functionality for finding weather information.                                                                             |
| [package.json](https://github.com/Louis-Rid/weather-app/blob/master/package.json)           | The code snippet is part of the weather-app repository. It includes components for displaying current weather, hourly weather, and weekly temperature. It also utilizes external libraries for geocoding and API requests. The codebase follows a standardized React project structure and uses testing frameworks for quality assurance. |

</details>

<details closed><summary>public</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [index.html](https://github.com/Louis-Rid/weather-app/blob/master/public/index.html)       | This code snippet is the index.html file in the public folder of a React app. It sets up the basic structure of the HTML page, includes necessary meta tags and links to favicon and manifest files. It also provides instructions for development and production builds.                                    |
| [manifest.json](https://github.com/Louis-Rid/weather-app/blob/master/public/manifest.json) | This code snippet is part of a weather app's repository. It contains the configuration for the app's manifest file, which defines properties such as the app's name, icons, start URL, display mode, and theme color. The manifest file is used by the browser when the app is installed on a user's device. |
| [robots.txt](https://github.com/Louis-Rid/weather-app/blob/master/public/robots.txt)       | The `robots.txt` file in the `public` directory of the weather-app repository is a simple file that provides instructions to web robots on which pages to crawl or ignore on the website. This file is empty, allowing all web robots to access any page on the site.                                        |

</details>

<details closed><summary>src</summary>

| File                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.js](https://github.com/Louis-Rid/weather-app/blob/master/src/index.js)           | This code snippet in src/index.js is responsible for rendering the main App component using React and ReactDOM. It sets up the root element to render the application and applies any necessary styling.                                                                                                                                                                                                                                                                                              |
| [App.js](https://github.com/Louis-Rid/weather-app/blob/master/src/App.js)               | The App.js file in the weather-app repository is responsible for rendering the main components of the weather app. It uses React hooks to manage state for the location, city name, and loading status. The code conditionally renders the FindYourWeather, WeatherCard, and Geocode components based on the loading status. If loading is true, it displays a loading spinner. Otherwise, it renders the components for finding weather, displaying weather information, and geocoding the location. |
| [index.css](https://github.com/Louis-Rid/weather-app/blob/master/src/index.css)         | The code snippet in the `index.css` file defines the styling for the Weather App's main container, background color, font, and loading spinner. It ensures a visually appealing and consistent user interface.                                                                                                                                                                                                                                                                                        |
| [setupTests.js](https://github.com/Louis-Rid/weather-app/blob/master/src/setupTests.js) | The `setupTests.js` file sets up the testing environment for the weather app. It imports required dependencies and sets up a mock geolocation object for testing purposes. This file ensures that the app's features related to geolocation are properly tested.                                                                                                                                                                                                                                      |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [getWeatherData.js](https://github.com/Louis-Rid/weather-app/blob/master/src/utils/getWeatherData.js) | The `getWeatherData` function, located in `src/utils/getWeatherData.js`, fetches weather data from an endpoint and extracts the city and state from the response. It then sets the city and state using the `setCity` function provided as a parameter. The function returns an array containing the extracted city and state. |

</details>

<details closed><summary>src.components</summary>

| File                                                                                         | Summary                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Geocode.js](https://github.com/Louis-Rid/weather-app/blob/master/src/components/Geocode.js) | The `Geocode.js` component in the `weather-app` repository is responsible for retrieving the city name based on latitude and longitude coordinates. It uses the Google Maps Geocoding API to make the request and updates the city name using the `setCity` function. |

</details>

<details closed><summary>src.components.FindYourWeather</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FindYourWeather.js](https://github.com/Louis-Rid/weather-app/blob/master/src/components/FindYourWeather/FindYourWeather.js)   | The `FindYourWeather` component is part of the weather app repository. Its main role is to allow users to find their weather by using their current location. It utilizes geolocation to retrieve the latitude and longitude coordinates, updates the loading state, and renders a button for users to trigger the geolocation feature. |
| [findYourWeather.css](https://github.com/Louis-Rid/weather-app/blob/master/src/components/FindYourWeather/findYourWeather.css) | This code snippet defines the CSS styling for the FindYourWeather component in the weather-app repository. It specifies the layout and appearance of the component's container, button, and heading.                                                                                                                                    |

</details>

<details closed><summary>src.components.HourlyWeather</summary>

| File                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [hourlyWeather.css](https://github.com/Louis-Rid/weather-app/blob/master/src/components/HourlyWeather/hourlyWeather.css) | The `hourlyWeather.css` file in the `HourlyWeather` component of the `weather-app` repository defines the styling for the hourly weather display. It sets the background color, padding, and border radius for the container, as well as the display and scrollbar settings for the inner container.          |
| [HourlyWeather.js](https://github.com/Louis-Rid/weather-app/blob/master/src/components/HourlyWeather/HourlyWeather.js)   | The `HourlyWeather` component in the `src/components/HourlyWeather/HourlyWeather.js` file is responsible for rendering the hourly weather forecast. It receives the weather data as props and updates the forecast every hour. It uses the `HourlyWeatherItem` component to display each hourly weather item. |

</details>

<details closed><summary>src.components.WeeklyTemp</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [WeeklyTemp.js](https://github.com/Louis-Rid/weather-app/blob/master/src/components/WeeklyTemp/WeeklyTemp.js)   | The code snippet is a React component called WeeklyTemp that displays the weekly temperature forecast. It receives weather data as a prop and updates the temperature values for each day of the week. The component dynamically renders the temperature forecast using the WeeklyTempItem component. |
| [weeklyTemp.css](https://github.com/Louis-Rid/weather-app/blob/master/src/components/WeeklyTemp/weeklyTemp.css) | The code snippet in `weeklyTemp.css` defines the styling for the WeeklyTemp component in the weather-app repository. It sets the display property to flex and the flex-direction property to column for the container element.                                                                        |

</details>

<details closed><summary>src.components.WeeklyTempItem</summary>

| File                                                                                                                        | Summary                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [WeeklyTempItem.js](https://github.com/Louis-Rid/weather-app/blob/master/src/components/WeeklyTempItem/WeeklyTempItem.js)   | This code snippet represents the WeeklyTempItem component in the weather-app repository. It displays the maximum and minimum temperature for a specific day of the week. The component is responsible for rendering this information in a structured manner.                                       |
| [weeklyTempItem.css](https://github.com/Louis-Rid/weather-app/blob/master/src/components/WeeklyTempItem/weeklyTempItem.css) | The code snippet in `weeklyTempItem.css` defines the styling for the WeeklyTempItem component in the weather app repository. It sets the display, font size, color, padding, and border properties, and also specifies different font weights and colors for the maximum and minimum temperatures. |

</details>

<details closed><summary>src.components.WeatherCard</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [WeatherCard.js](https://github.com/Louis-Rid/weather-app/blob/master/src/components/WeatherCard/WeatherCard.js) | The WeatherCard component in the code snippet is responsible for displaying the current weather, hourly weather, and weekly temperature based on the provided coordinates. It fetches weather data from an API, sets the data in the state, and renders the weather information. |

</details>

<details closed><summary>src.components.CurrentWeather</summary>

| File                                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [CurrentWeather.js](https://github.com/Louis-Rid/weather-app/blob/master/src/components/CurrentWeather/CurrentWeather.js)   | This code snippet is part of the weather-app repository. It represents the CurrentWeather component, which displays the current temperature and city based on weather data obtained from an API. The component utilizes React hooks, useEffect, and useState for state management.                                       |
| [currentWeather.css](https://github.com/Louis-Rid/weather-app/blob/master/src/components/CurrentWeather/currentWeather.css) | The `currentWeather.css` file is part of the Weather App repository's architecture. It defines the styling for the current weather component, including the temperature, city, and container. This file helps create an appealing and visually consistent user interface for displaying the current weather information. |

</details>

<details closed><summary>src.components.HourlyWeatherItem</summary>

| File                                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [hourlyWeatherItem.css](https://github.com/Louis-Rid/weather-app/blob/master/src/components/HourlyWeatherItem/hourlyWeatherItem.css) | The code snippet in `HourlyWeatherItem` component's CSS file defines the styling for each hourly weather item. It specifies the layout, color, font, and margin properties. The main role of this code is to ensure consistent and visually appealing presentation of hourly weather information within the weather app. |
| [HourlyWeatherItem.js](https://github.com/Louis-Rid/weather-app/blob/master/src/components/HourlyWeatherItem/HourlyWeatherItem.js)   | The HourlyWeatherItem component is a reusable UI element in the weather-app repository. It displays the temperature and time for a specific hour in the hourly weather forecast. This component allows for consistent and modular rendering of hourly weather information.                                               |

</details>

<details closed><summary>src.__tests__</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [findYourWeather.test.js](https://github.com/Louis-Rid/weather-app/blob/master/src/__tests__/findYourWeather.test.js) | The code snippet in this test file tests the behavior of the Find Your Weather feature in the weather app. It checks if the user's weather is displayed after clicking the button, if a loading icon is shown during the request, and if the displayed weather data is updated to the user's location. |

</details>

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **JavaScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the weather-app repository:

```sh
git clone https://github.com/Louis-Rid/weather-app
```

2. Change to the project directory:

```sh
cd weather-app
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running weather-app

Use the following command to run weather-app:

```sh
node app.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🛠 Project Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github/Louis-Rid/weather-app/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github/Louis-Rid/weather-app/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github/Louis-Rid/weather-app/issues)**: Submit bugs found or log feature requests for Weather-app.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Louis-Rid/weather-app
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
