import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

import Form from "./components/Form";

import { useWeatherContext } from "./contexts/WeatherDataContext";

import DataBlank from "./components/DataBlank/DataBlank";
import DataSkeleton from "./components/DataSkeletonLoading/DataSkeleton";
import DataPopulated from "./components/DataPopulated/DataPopulated";
import DataError from "./components/DataError/DataError";
import BoxWrapper from "./components/BoxWrapper";

function App() {
  const { status } = useWeatherContext();

  return (
    <>
      <Title />
      <Wrapper>
        <BoxWrapper>
          {status === "idle" && <DataBlank />}
          {(status === "loading" || status === "retrieving geolocation") && (
            <DataSkeleton />
          )}
          {status === "finished" && <DataPopulated />}
          {status === "error" && <DataError />}
        </BoxWrapper>
        <Form />
      </Wrapper>
    </>
  );
}

export default App;
