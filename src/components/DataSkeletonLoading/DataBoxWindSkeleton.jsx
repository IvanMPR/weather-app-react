import WindGadget from "../WindGadget";

function DataBoxWindSkeleton() {
  return (
    <div className="box">
      <div className="data-div">
        <p className="wind-direction-degrees italic skeleton">
          wind direction:
        </p>
        <p className="wind-direction-degrees-output output output-blank-longer skeleton">
          <span className="additional-info-output output skeleton"></span>
        </p>
      </div>
      <div className="data-div">
        <p className="wind-speed italic skeleton">wind speed:</p>
        <p className="wind-speed-output output output-blank-longer skeleton"></p>
      </div>
      <div className="data-div">
        <p className="wind-gusts italic skeleton">gusts:</p>
        <p className="wind-gusts-output output output-blank-shorter skeleton"></p>
      </div>
      <WindGadget />
    </div>
  );
}

export default DataBoxWindSkeleton;
