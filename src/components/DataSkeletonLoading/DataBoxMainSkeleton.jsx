function DataBoxMainSkeleton() {
  return (
    <div className="box">
      <p className="location blank blank-short skeleton"></p>
      <div className="blank blank-large-icon skeleton"></div>
      <p className="description output blank italic blank-medium skeleton"></p>
      <p className="temperature large blank blank-thick skeleton"></p>

      <p className="date blank blank-long skeleton"></p>
      <p className="time blank blank-short-time skeleton"></p>
    </div>
  );
}

export default DataBoxMainSkeleton;
