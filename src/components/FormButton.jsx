import { useWeatherContext } from "../contexts/WeatherDataContext";

function FormButton({ type, className, text }) {
  const { city, setCity } = useWeatherContext();

  function handleApiCall(e) {
    e.preventDefault();
    if (city === "") {
      alert("Please enter a city name");
    } else {
      setCity(city);
      console.log("api call - city: ", city);
    }
  }
  return (
    <button type={type} className={className} onClick={handleApiCall}>
      {text}
    </button>
  );
}

export default FormButton;
