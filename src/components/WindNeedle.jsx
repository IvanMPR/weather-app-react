import { useEffect } from "react";
import { useWeatherContext } from "../contexts/WeatherDataContext";
import { windDirectionGadget } from "../helpers";

function WindNeedle() {
  const { windDirectionDegrees, status } = useWeatherContext();

  useEffect(() => {
    const needle = document.getElementById("needle");
    windDirectionGadget(windDirectionDegrees, needle);
  }, [windDirectionDegrees]);

  return (
    <g id="needle" className={status === "idle" ? "rotate" : ""}>
      <path
        className="st3"
        d="M200,176.5l10,21.5l11.4,24.7l-19.8-12.3l-1.6-1l-1.6,1l-19.8,12.3l11.4-24.7L200,176.5 M200,169.4l-12.7,27.4
l-15.6,33.8L200,213l28.3,17.6l-15.7-33.8L200,169.4L200,169.4z"
      />
    </g>
  );
}

export default WindNeedle;
