import { useWeatherContext } from "../../contexts/WeatherDataContext";
import WindGadget from "../WindGadget";

function DataBoxWind() {
  const { windDirection, windGust, windSpeed } = useWeatherContext();

  return (
    <div className="box">
      <div className="data-div">
        <p className="wind-direction-degrees italic">wind direction:</p>
        <p className="wind-direction-degrees-output output ">
          <span className="additional-info-output output">{windDirection}</span>
        </p>
      </div>
      <div className="data-div">
        <p className="wind-speed italic">wind speed:</p>
        <p className="wind-speed-output output ">{windSpeed} km/h</p>
      </div>
      <div className="data-div">
        <p className="wind-gusts italic">gusts:</p>
        <p className="wind-gusts-output output ">{windGust}</p>
      </div>
      <WindGadget />
    </div>
  );
}

export default DataBoxWind;
