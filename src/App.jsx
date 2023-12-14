import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

import Form from "./components/Form";

import { useWeatherContext } from "./contexts/WeatherDataContext";

import DataBlank from "./components/DataBlank/DataBlank";
import DataSkeleton from "./components/DataSkeletonLoading/DataSkeleton";
import DataPopulated from "./components/DataPopulated/DataPopulated";

function App() {
  const { status } = useWeatherContext();

  return (
    <>
      <Title />
      <Wrapper>
        {status === "idle" && <DataBlank />}
        {status === "loading" && <DataSkeleton />}
        {status === "finished" && <DataPopulated />}
      </Wrapper>
      <Form />
    </>
  );
}

export default App;
