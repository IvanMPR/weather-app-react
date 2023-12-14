import WindGadget from "./WindGadget";

function DataBoxWind() {
  return (
    <div className="box">
      <div class="data-div">
        <p class="wind-direction-degrees italic">wind direction:</p>
        <p class="wind-direction-degrees-output output output-blank-longer">
          <span class="additional-info-output output"></span>
        </p>
      </div>
      <div class="data-div">
        <p class="wind-speed italic">wind speed:</p>
        <p class="wind-speed-output output output-blank-longer"></p>
      </div>
      <div class="data-div">
        <p class="wind-gusts italic">gusts:</p>
        <p class="wind-gusts-output output output-blank-shorter"></p>
      </div>
      <WindGadget />
    </div>
  );
}

export default DataBoxWind;
