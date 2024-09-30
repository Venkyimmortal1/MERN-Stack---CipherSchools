// # Lecture28--Project-Cipherschools
// cs-weather-app-project

// weatherRow.js

import { getWeatherTypeFromCode } from "../weatherUtil";

const dataFormatter = new Intl.DateTimeFormat("en-IN", {
    month: "short",
    day:"numeric",
    year: "2-digit",
});

const formatDate = (date) = dateFormatter.format(date);
const WeatherRow = () => ({
    weather: { Date, maxTemperatture, minTemperature, weatherCode},
    isCelsius,
}) => {
    return (
        <tr>
            <td>{formatDate(date)}</td>
            <td>
                H: {isCelsius ? `${maxTemperatture} °C` : `${covertToFarhenheit(maxTemperature)} °F`}{" "}  - 
                L:                H: {isCelsius ? `${minTemperatture} °C` : `${covertToFarhenheit(minTemperature)} °F`}{" "}  - L: 25 °C

            </td>
            <td>
                {getWeatherTypeFromCode(weatherCode)}
            </td>
        </tr>
    );
};
export default WeatherRow;

// weatherUtil.js

const convertToFahrenheit = (celsiusTemp) => {
    return  ((celsiusTemp * 9) / 5 + 32).toFixed(1);
};

    const getWeatherTypeFromCode = (code) => wmoWeatherCode.get(code);
export  {convertToFahrenheit, getWeatherTypeFromCode};

// weatherApi.js

import Axios from "axios";

const WEATHER_API_URL = "https://api/open-meteo.com/v1/forecast";

const convertDate = (date) => {
    const year = date.getFullYear();
    const month = 
    date.getMonth() + 1 <= 9 ?`0${date.getMonth() + 1}` : date.getMonth() +1;
    const day = 
    date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
    return `${year}-${month}-${day}`;

};

const getWeather = async({latitude, longitude}) =>{
  const currentDate = new Date();
  const startDate = new Date(currentDate.setDate(currentDate.getMonth() + 1));
  const {data: weatherInfo} = await Axios.get(WEATHER_API_URL, {
    params: {
        latitude, 
        longitude, 
        current_weather: true, 
        timezone: "IST", 
        daily: ["temperature_2m_max", "temperature_2m_min", "weathercode"],
        start_date: convertDate(startDate),
        end_date: convertDate(new Date(startDate.setDate(startDate.getDate() + 7))
    ),
    },
  });
  return weatherInfo;
};
export default getWeather;

// App.css

@import url(https://jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css);


.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


.app {
  padding: 20vh 20%;
  height: 100vh;
}
.table-custom{
  text-align: center;
}
.dark{
  color: white !important;
  background-color: black;
}
.my-heading{
  margin-bottom: 5vh;
}


// weatherSummary.js

import {convertToFahrenheit, getWeatherTypeFromCode} from "../weatherUtil";
const WeatherSummary = ({currentWeather: {temprature, weatherCode}},
    isCelsius
) => {
    return (
        <div>
            <h1>{isCelsius ? `${temprature} °C`: `${convertToFahrenheit(temprature)} °F`}  | {getWeatherTypeFromCode(weatherCode)}</h1>
        </div>
    );
};
export default WeatherSummary;

// weatherPage.js

import getWeather from "../Api.js/weatherApi";
import WeatherRow from "../components/WeatherRow";
import WeatherSummary from "../components/WeatherSummary";
import { useEffect, useState } from "react";

const fectchCoordinates = (callback) => {
    navigator.geolocation.getCurrentPosition(
        ({coords: {latitude, longitude}}) => {
    callback(latitude, longitude)
    }, (err) => console.error(err)
);
};
const WeatherPage = () => {
    const {todayWeather, setTodayWeather} = useState({});
    const {weekWeather, setWeekWeather} = useState([]);
    const [isCelsius, setIsCelsius] = useState(true);
    const isDay = todayWeather.isDay ?? true;

    useEffect(() => {
    fectchCoordinates(async (latitude , longitude) =>{
        const weatherInfo = await getWeather({ latitude, longitude});
        convertToStateVariable(weatherInfo);
    });
    }, []);

    const covertToStateVariable = (tempWeekWeather) => {
        let fetchedWeatherInfo = [];
        for(let i =0; i <tempWeekWeather.daily.time.length; i++){
         fetchedWeatherInfo.push({
            date: new Date(tempWeekWeather.daily.time[i]),
            maxTemperature: tempWeekWeather.daily.temperature_2m_max[i],
            minTemperature: tempWeekWeather.daily.temperature_2m_max[i],
            weatherCode: tempWeekWeather.daily.weatherCode[i],
         })
        }
        setWeekWeather(fetchedWeatherInfo);

        let currentWeather = tempWeekWeather.current_weather;
        currentWeather.time = new Date(currentWeather.time);
        currentWeather.isDay = currentWeather.is_Day === 1? true: false;
        delete currentWeather.is_day;
        currentWeather.weatherCode = currentWeather.weatherCode;
        delete currentWeather.weatherCode;
        setTodayWeather(currentWeather);
    };

    return (
        <>
        <div className={isDay ? "app" : "app dark"}> {/* //linked to app.css using "app". */}
            <h1 className="my-heading">Weather</h1>
            <button 
            className="ui icon button"
            onClick={() => {
                setIsCelsius(!isCelsius);
            }}
            style={{float: "right"}}
            >
            {isCelsius ? "°F" : "°C"}
            </button>
        <div>
            <WeatherSummary currentWeather={todayWeather} isCelsius={isCelsius} />
            <table className={`ui very basic table ${!isDay ? " dark": ""}`}>
                <thead className={`table-custom${!isDay ? " dark": ""}`}>
                <tr>
                    Date
                </tr>
                <tr>
                    Temperature
                </tr>
                <tr>
                    Type
                </tr>
                </thead>
                <tbody className="table-custom">

                    <WeatherRow />
                    <WeatherRow />
                    <WeatherRow />
                    <WeatherRow />
                    <WeatherRow />
                    <WeatherRow />
                    <WeatherRow />

                </tbody>
            </table>
        </div>
        </div>
        </>
    );
};
export default WeatherPage;




























