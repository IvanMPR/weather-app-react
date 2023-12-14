import WindGadget from "../WindGadget";

function DataBoxWindBlank() {
  return (
    <div className="box">
      <div className="data-div">
        <p className="wind-direction-degrees italic">wind direction:</p>
        <p className="wind-direction-degrees-output output output-blank-longer">
          <span className="additional-info-output output"></span>
        </p>
      </div>
      <div className="data-div">
        <p className="wind-speed italic">wind speed:</p>
        <p className="wind-speed-output output output-blank-longer"></p>
      </div>
      <div className="data-div">
        <p className="wind-gusts italic">gusts:</p>
        <p className="wind-gusts-output output output-blank-shorter"></p>
      </div>
      <WindGadget />
    </div>
  );
}

export default DataBoxWindBlank;
