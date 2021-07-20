import React from "react";
import { Dialog } from "@reach/dialog";
import { RATINGS } from "../../styles/CONSTANTS";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";

export default function DyrtResult({ result, setModal }) {
  const { _score, name, region_name } = result;
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
          <div>{RATINGS[`${Math.round(_score)}`]}</div>
          <div>{name}</div>
          <div>{region_name}</div>
        </Dialog>{" "}
      </div>
    </div>
  );
}
