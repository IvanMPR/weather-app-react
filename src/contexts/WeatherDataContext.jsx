import { createContext, useContext, useState, useEffect } from "react";
import {
  showDate,
  showTime,
  translateWindDegreesToDirection,
  displayWindGust,
} from "../helpers";

const API_KEY = "25f76a4f0875a7268665e799574424e1";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const currentDate = showDate();
  const currentTime = showTime();

  const windSpeed = Math.round(weatherData?.wind?.speed * 3.6).toFixed(1);
  const windRaw = weatherData?.wind?.deg;
  const windDirection = translateWindDegreesToDirection(weatherData?.wind?.deg);
  const windDirectionDegrees = weatherData?.wind?.deg;
  const windGust = displayWindGust(weatherData);

  useEffect(() => {
    let isMounted = true; // add this line

    async function apiCallOpenWeather() {
      try {
        setStatus("loading");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
        const request = await fetch(url);

        if (!request.ok) {
          throw new Error("Country/city not found !");
        }
        const response = await request.json();
        if (isMounted) {
          // check if component is still mounted
          setWeatherData(response);
          setStatus("finished"); // set status to "finished" here
        }
      } catch (err) {
        if (isMounted) {
          // check if component is still mounted
          setError(err.message);
          setStatus("error"); // set status to "error" here
        }
      }
    }

    if (city.length < 3) {
      setWeatherData(null);
      return;
    }

    apiCallOpenWeather();

    return () => {
      isMounted = false;
    }; // clean up function
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        status,
        setCity,
        city,
        currentDate,
        currentTime,
        windDirection,
        windDirectionDegrees,
        windGust,
        windSpeed,
        windRaw,
        error,
        setError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
}

export { WeatherProvider, useWeatherContext };
// useEffect(() => {
//   async function apiCallOpenWeather() {
//     try {
//       setStatus("loading");

//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
//       const request = await fetch(url);

//       if (!request.ok) {
//         setStatus("error");
//         throw new Error("Country/city not found !");
//       }
//       const response = await request.json();
//       setWeatherData(response);
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       error ? setStatus("error") : setStatus("finished");
//     }
//   }

//   if (city.length < 3) {
//     setWeatherData(null);
//     return;
//   }

//   apiCallOpenWeather();
// }, [city, error]);
