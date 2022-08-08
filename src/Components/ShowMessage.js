import React from "react";
// imported file
import style from "./showmessage.module.css";

const ShowMessage = (props) => {
  return (
    <div className={style["msg-container"]}>
      <p className={style["msg-p"]}>{props.msg}</p>
    </div>
  );
};

export default ShowMessage;
