import React from "react";
import { ReactComponent as DeleteSign } from "../../images/delete-icon.svg";
import "./DeleteIcon.styles.scss";

const DeleteIcon = () => {
  return (
    <>
      <DeleteSign className="delete-icon"></DeleteSign>
    </>
  );
};

export default DeleteIcon;
