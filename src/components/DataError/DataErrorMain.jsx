import { useWeatherContext } from "../../contexts/WeatherDataContext";

function DataBoxMain() {
  const { error } = useWeatherContext();

  return (
    <div className="box">
      <p className="location">{"Something went wrong!"}</p>
      <div className="icon-wrapper">
        <img src="/icon-placeholder.png" alt="icon" className="weather-icons" />
      </div>
      <p className="description output italic">{error}</p>
      <p className="temperature large blank blank-thick"></p>

      <p className="date blank blank-long"></p>
      <p className="time blank blank-short-time"></p>
    </div>
  );
}

export default DataBoxMain;
