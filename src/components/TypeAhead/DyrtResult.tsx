import React, { FC } from "react";
import { Dialog } from "@reach/dialog";
import { RATINGS } from "../../styles/CONSTANTS";
import styled from "styled-components/macro";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";

interface ResultObject {
  _score: number | undefined;
  photoUrl: string | undefined;
  name: string | undefined;
  region_name: string | undefined;
}

const undefinedModalObject = {
  _score: undefined,
  photoUrl: undefined,
  name: undefined,
  region_name: undefined,
};

const DyrtResult: FC<{ result: ResultObject; setModal: any }> = ({
  result,
  setModal,
}) => {
  const [showDialog, setShowDialog] = React.useState(false);

  const close = () => {
    setShowDialog(false);
    return setModal(undefinedModalObject);
  };

  React.useEffect(() => {
    if (result.name) {
      setShowDialog(true);
    }
  }, [result]);

  const { _score, name, region_name, photoUrl } = { ...result };
  const numericalScore: number = _score ? Math.round(_score) : 100;
  const typedRatings: { [key: number]: string } = RATINGS;
  const rating: string | number = _score
    ? typedRatings[numericalScore]
    : "No ratings reported";

  return (
    <div>
      <div>
        {" "}
        <DialogWrapper isOpen={showDialog} onDismiss={close}>
          {" "}
          <button className="close-button" onClick={close}>
            {" "}
            <VisuallyHidden>Close</VisuallyHidden> <span aria-hidden>×</span>{" "}
          </button>{" "}
          <ResultRow>
            <PhotoWrapper>
              <Photo src={photoUrl}></Photo>
            </PhotoWrapper>
            <InfoWrapper>
              <NameWrapper>
                {name} - <LocationSpan>{region_name}</LocationSpan>
              </NameWrapper>
              <Rating>{rating}</Rating>
            </InfoWrapper>
          </ResultRow>
        </DialogWrapper>{" "}
      </div>
    </div>
  );
};

export default DyrtResult;

const DialogWrapper = styled(Dialog)`
  margin: 33vh auto;
  padding: 3rem;
  border-radius: 5px;
`;

const ResultRow = styled.div`
  display: flex;
  gap: 25px;
`;

const PhotoWrapper = styled.div`
  width: fit-content;
  padding: 5px;
  border-radius: 5px;
  border: solid 1px black;
`;

const Photo = styled.img`
  width: 400px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NameWrapper = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Rating = styled.div`
  font-size: 24px;
`;

const LocationSpan = styled.em`
  font-size: 32px;
  font-weight: normal;
`;
