// import { useWeatherContext } from "../contexts/WeatherDataContext";

function FormInput() {
  // const { setCity } = useWeatherContext();
  return (
    <input
      type="text"
      placeholder="...city name or [city name, country code]"
      // onChange={(e) => setCity(e.target.value)}
    ></input>
  );
}

export default FormInput;
