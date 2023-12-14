import DataBoxWind from "./DataBoxWind";
import DataBoxMain from "./DataBoxMain";
import DataBoxInfo from "./DataBoxInfo";

function DataPopulated() {
  return (
    <>
      <DataBoxMain />
      <DataBoxInfo />
      <DataBoxWind />
    </>
  );
}

export default DataPopulated;
