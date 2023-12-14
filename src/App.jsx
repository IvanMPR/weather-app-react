import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

import Form from "./components/Form";

import { useWeatherContext } from "./contexts/WeatherDataContext";

import DataBlank from "./components/DataBlank/DataBlank";
import DataSkeleton from "./components/DataSkeletonLoading/DataSkeleton";
import DataPopulated from "./components/DataPopulated/DataPopulated";
import DataError from "./components/DataError/DataError";

function App() {
  const { status } = useWeatherContext();

  return (
    <>
      <Title />
      <Wrapper>
        {status === "idle" && <DataBlank />}
        {status === "loading" && <DataSkeleton />}
        {status === "finished" && <DataPopulated />}
        {status === "error" && <DataError />}
      </Wrapper>
      <Form />
    </>
  );
}

export default App;
