import { useWeatherContext } from "../contexts/WeatherDataContext";
import { useRef } from "react";

function Form() {
  const { setCity } = useWeatherContext();
  const ref = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    if (ref.current.value === "" || ref.current.value.length < 2) return;
    setCity(ref.current.value);
    ref.current.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="...city name or [city name, country code]"
        ref={ref}
      ></input>
      <button type="submit" className="search-city-btn">
        Search
      </button>
      <button type="submit" className="current-location-btn">
        Get Current Location Data
      </button>
    </form>
  );
}

export default Form;
