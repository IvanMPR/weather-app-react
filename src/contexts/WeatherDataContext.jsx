import { createContext, useContext, useState, useEffect } from "react";

const API_KEY = "25f76a4f0875a7268665e799574424e1";

function showDate() {
  const now = new Date();
  const dateStr = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
  }).format(now);
  const getNumber = dateStr.slice(-2);
  return `${dateStr}${ordinalNumberSuffix(+getNumber)}`;
}
//  Time
function showTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")} : ${String(
    now.getMinutes()
  ).padStart(2, "0")}`;
}
// Add suffix to date
const ordinalNumberSuffix = function (date) {
  return `${
    date === 1 || date === 21 || date === 31
      ? "st"
      : date === 2 || date === 22
      ? "nd"
      : date === 3 || date === 23
      ? "rd"
      : "th"
  } `;
};

// Wind direction represented by N,E,S,W symbols
const translateWindDegreesToDirection = function (degVal) {
  return degVal > 30 && degVal <= 60
    ? "NE"
    : degVal > 60 && degVal <= 120
    ? "E"
    : degVal > 120 && degVal <= 150
    ? "SE"
    : degVal > 150 && degVal <= 210
    ? "S"
    : degVal > 210 && degVal <= 240
    ? "SW"
    : degVal > 240 && degVal <= 300
    ? "W"
    : degVal > 300 && degVal <= 330
    ? "NW"
    : "N";
};

// Wind gust
function displayWindGust(obj) {
  return obj?.wind?.gust
    ? `${Math.round(obj.wind.gust * 3.6).toFixed(1)} km/h`
    : "none";
}

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [city, setCity] = useState("");

  const currentDate = showDate();
  const currentTime = showTime();

  const windSpeed = Math.round(weatherData?.wind?.speed * 3.6).toFixed(1);
  const windDirection = translateWindDegreesToDirection(weatherData?.wind?.deg);
  const windDirectionDegrees = weatherData?.wind?.deg;
  const windGust = displayWindGust(weatherData);

  useEffect(() => {
    const controller = new AbortController();
    async function apiCallOpenWeather() {
      try {
        setStatus("loading");

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
        const request = await fetch(url, { signal: controller.signal });

        if (!request.ok) {
          setStatus("finished");
          throw new Error("Country not found !");
        }
        const response = await request.json();
        setWeatherData(response);

        // /////////////////////////////////////////////////////////
        //   renderDataUpper(response);
        //   renderDataMiddle(response);
        //   renderDataLower(response);
        // const needle = document.getElementById("needle");
        //   windDirectionGadget(response.wind.deg, needle);
        // /////////////////////////////////////////////////////////
      } catch (err) {
        // renderError(upperPart, err);
        // renderMiddleOnError();
        // renderLowerOnError();
        console.error(err);
      } finally {
        setStatus("finished");
      }
    }

    if (city.length < 3) {
      setWeatherData(null);
      return;
    }

    apiCallOpenWeather();

    return () => controller.abort();
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
