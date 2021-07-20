import React from "react";
import TypeAheadSearch from "./components/TypeAhead/TypeAheadSearch";
import { dyrtSearch } from "./utils/dyrt-search";
import styled from "styled-components/macro";

function App() {
  return (
    <Wrapper>
      <TypeAheadSearch fetcher={dyrtSearch} icon={"compass"} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`;
