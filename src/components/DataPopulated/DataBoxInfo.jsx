import { useWeatherContext } from "../../contexts/WeatherDataContext";

function DataBoxInfo() {
  const { weatherData } = useWeatherContext();
  const { main } = weatherData.weather[0];
  const { feels_like, humidity, pressure, temp_max, temp_min } =
    weatherData.main;
  const { visibility } = weatherData;

  return (
    <div className="box">
      <div className="data-div">
        <p className="dominant-weather-condition italic">overall weather:</p>
        <p className="dominant-weather-condition-output output ">{main}</p>
      </div>
      <div className="data-div">
        <p className="subjective-feeling italic">feels like:</p>
        <p className="subjective-feeling-output output ">
          {Math.round(feels_like)} &deg;C
        </p>
      </div>

      <div className="data-div">
        <p className="humidity italic">humidity:</p>
        <p className="humidity-output output ">{humidity} %</p>
      </div>
      <div className="data-div">
        <p className="pressure italic">pressure:</p>
        <p className="pressure-output output ">{pressure} mb</p>
      </div>
      <div className="data-div">
        <p className="temp-max italic">temperature high:</p>
        <p className="temp-max-output output ">{Math.round(temp_max)} &deg;C</p>
      </div>
      <div className="data-div">
        <p className="temp-low italic">temperature low:</p>
        <p className="temp-low-output output ">{Math.round(temp_min)} &deg;C</p>
      </div>
      <div className="data-div">
        <p className="visibility italic">visibility:</p>
        <p className="visibility-output output ">
          {visibility % 1000 === 0
            ? visibility / 1000
            : (visibility / 1000).toFixed(2)}{" "}
          km
        </p>
      </div>
    </div>
  );
}

export default DataBoxInfo;
