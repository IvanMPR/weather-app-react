function DataBoxInfoSkeleton() {
  return (
    <div className="box">
      <div className="data-div">
        <p className="dominant-weather-condition italic skeleton">
          overall weather:
        </p>
        <p className="dominant-weather-condition-output output output-blank-longer skeleton"></p>
      </div>
      <div className="data-div">
        <p className="subjective-feeling italic skeleton">feels like:</p>
        <p className="subjective-feeling-output output output-blank-shorter skeleton"></p>
      </div>

      <div className="data-div">
        <p className="humidity italic skeleton">humidity:</p>
        <p className="humidity-output output output-blank-longer skeleton"></p>
      </div>
      <div className="data-div">
        <p className="pressure italic skeleton">pressure:</p>
        <p className="pressure-output output output-blank-longer skeleton"></p>
      </div>
      <div className="data-div">
        <p className="temp-max italic skeleton">temperature high:</p>
        <p className="temp-max-output output output-blank-shorter skeleton"></p>
      </div>
      <div className="data-div">
        <p className="temp-low italic skeleton">temperature low:</p>
        <p className="temp-low-output output output-blank-shorter skeleton"></p>
      </div>
      <div className="data-div">
        <p className="visibility italic skeleton">visibility:</p>
        <p className="visibility-output output output-blank-shorter skeleton"></p>
      </div>
    </div>
  );
}

export default DataBoxInfoSkeleton;
