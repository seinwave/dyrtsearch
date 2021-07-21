import React, { FC } from "react";
import { debounce } from "../../utils/debounce";
import { COLORS } from "../../styles/CONSTANTS";
import Icon from "./Icon";
import styled from "styled-components/macro";
import DyrtResult from "./DyrtResult";

interface ModalObject {
  _score: number;
  photoUrl: string;
  name: string;
  region_name: string;
}

interface ResultArray extends Array<ModalObject> {}

const TypeAheadSearch: FC<{
  fetcher: Function;
  icon: string;
  statusCapture: any;
  setStatusCapture: any;
}> = ({ fetcher, icon, statusCapture, setStatusCapture }) => {
  const [nameString, setNameString] = React.useState("");
  const [results, setResults] = React.useState<ResultArray>([]);
  const [modal, setModal] = React.useState<ModalObject | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameString(e.target.value);
    if (e.target.value.length >= 3) {
      return debounce(handleSearch(), 350);
    } else if (e.target.value === "") {
      return setResults([]);
    }
  }

  function modalSetter(
    e: React.MouseEvent<HTMLDivElement>,
    modal: ModalObject
  ) {
    e.preventDefault();
    return setModal(modal);
  }

  function handleSearch() {
    const encodedQueryString = encodeURIComponent(nameString);
    fetcher(encodedQueryString)
      .then((data: { json: Function }) => data.json())
      .then((res: ResultArray) => {
        return setResults(res);
      })
      .catch((err: Error) => {
        setStatusCapture({ status: "error", error: err.message });
      });
  }

  const { status, error } = statusCapture;
  if (status === "error") {
    throw new Error(`Sorry, something went wrong: ${error}`);
  }

  return (
    <Wrapper>
      <label aria-label="camp-site-search">Find a camp site</label>
      <form name="camp-site-search" onSubmit={() => handleSearch()}>
        <SearchInput
          value={nameString}
          onChange={(e) => handleChange(e)}
          placeholder={"Moon river"}
        ></SearchInput>
      </form>
      <ResultsDropDown>
        <ResultsDropDownList>
          {results.map((datum: ModalObject) => {
            const { name } = datum;
            return (
              <SingleResultWrapper onClick={(e) => modalSetter(e, datum)}>
                {modal ? (
                  <DyrtResult result={modal} setModal={setModal} />
                ) : null}
                <ResultIcon>
                  <Icon id={icon} size={24}></Icon>
                </ResultIcon>
                <SingleResult>{name}</SingleResult>
              </SingleResultWrapper>
            );
          })}
        </ResultsDropDownList>
      </ResultsDropDown>
    </Wrapper>
  );
};

export default TypeAheadSearch;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  margin-top: 5px;
  font-size: 1rem;
  padding: 4px 8px;
  border-radius: 5px;
`;

const ResultsDropDown = styled.div`
  height: 400px;
  width: 600px;
  overflow-y: auto;
  top: 80px;
  left: -80px;
  position: absolute;
`;

const ResultsDropDownList = styled.ul``;

const SingleResultWrapper = styled.div`
  width: 400px;
  padding: 8px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${COLORS.gray[100]};
  }
`;

const ResultIcon = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 0.5rem;
  width: 2rem;
`;

const SingleResult = styled.li`
  list-style: none;
`;
