import { useWeatherContext } from "../../contexts/WeatherDataContext";

function DataBoxMain() {
  const { weatherData, status, currentDate, currentTime } = useWeatherContext();
  console.log(weatherData, status, "from data box main");
  return (
    <div className="box">
      <p className="location">
        {`${weatherData?.name}, (${weatherData?.sys?.country})`}
      </p>
      <div className="icon-wrapper">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="icon"
          className="weather-icons"
        />
      </div>
      <p className="description output italic">
        {weatherData?.weather[0]?.description}
      </p>
      <p className="temperature large ">
        {Math.round(weatherData?.main?.temp)}&deg;C
      </p>

      <p className="date">{currentDate}</p>
      <p className="time">{currentTime}</p>
    </div>
  );
}

export default DataBoxMain;
