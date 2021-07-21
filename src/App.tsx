import React, { FC } from "react";
import TypeAheadSearch from "./components/TypeAhead/TypeAheadSearch";
import { dyrtSearch } from "./utils/dyrt-search";
import { ErrorBoundary } from "react-error-boundary";

import styled from "styled-components/macro";

const ErrorFallback: FC<{ error: any; resetErrorBoundary: any }> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

function App() {
  const [statusCapture, setStatusCapture] = React.useState({
    status: "",
    error: "",
  });
  return (
    <Wrapper>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setStatusCapture({ status: "", error: "" })}
      >
        <TypeAheadSearch
          fetcher={dyrtSearch}
          icon={"compass"}
          statusCapture={statusCapture}
          setStatusCapture={setStatusCapture}
        />
      </ErrorBoundary>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding-top: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
