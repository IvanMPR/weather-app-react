function DataBoxMainBlank() {
  return (
    <div className="box">
      <p className="location blank blank-short "></p>
      <div className="icon-wrapper">
        <img src="/icon-placeholder.png" alt="icon" className="weather-icons" />
      </div>
      <p className="description output blank italic blank-medium "></p>
      <p className="temperature large blank blank-thick "></p>

      <p className="date blank blank-long "></p>
      <p className="time blank blank-short-time "></p>
    </div>
  );
}

export default DataBoxMainBlank;
