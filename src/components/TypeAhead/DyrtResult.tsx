import React, { FC } from "react";
import { Dialog } from "@reach/dialog";
import { RATINGS } from "../../styles/CONSTANTS";
import styled from "styled-components/macro";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";

interface ResultObject {
  _score: number;
  photoUrl: string;
  name: string;
  region_name: string;
}

const DyrtResult: FC<{ result: ResultObject; setModal: any }> = ({
  result,
  setModal,
}) => {
  const { _score, name, region_name, photoUrl } = result;
  const [showDialog, setShowDialog] = React.useState(false);

  const close = () => {
    setShowDialog(false);
    return setModal(null);
  };

  React.useEffect(() => {
    if (result) {
      setShowDialog(true);
    }
  }, [result]);

  const numericalScore: number = Math.round(_score);
  const typedRatings: { [key: number]: string } = RATINGS;
  const rating: string = typedRatings[numericalScore];

  return (
    <div>
      <div>
        {" "}
        <Dialog isOpen={showDialog} onDismiss={close}>
          {" "}
          <button className="close-button" onClick={close}>
            {" "}
            <VisuallyHidden>Close</VisuallyHidden> <span aria-hidden>×</span>{" "}
          </button>{" "}
          <div>{rating}</div>
          <div>{name}</div>
          <div>{region_name}</div>
        </Dialog>{" "}
      </div>
    </div>
  );
};

export default DyrtResult;
