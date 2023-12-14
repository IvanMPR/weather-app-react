function DataBoxInfoBlank() {
  return (
    <div className="box">
      <div className="data-div">
        <p className="dominant-weather-condition italic">overall weather:</p>
        <p className="dominant-weather-condition-output output output-blank-longer"></p>
      </div>
      <div className="data-div">
        <p className="subjective-feeling italic">feels like:</p>
        <p className="subjective-feeling-output output output-blank-shorter"></p>
      </div>

      <div className="data-div">
        <p className="humidity italic">humidity:</p>
        <p className="humidity-output output output-blank-longer"></p>
      </div>
      <div className="data-div">
        <p className="pressure italic">pressure:</p>
        <p className="pressure-output output output-blank-longer"></p>
      </div>
      <div className="data-div">
        <p className="temp-max italic">temperature high:</p>
        <p className="temp-max-output output output-blank-shorter"></p>
      </div>
      <div className="data-div">
        <p className="temp-low italic">temperature low:</p>
        <p className="temp-low-output output output-blank-shorter"></p>
      </div>
      <div className="data-div">
        <p className="visibility italic">visibility:</p>
        <p className="visibility-output output output-blank-shorter"></p>
      </div>
    </div>
  );
}

export default DataBoxInfoBlank;
