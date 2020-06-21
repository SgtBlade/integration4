import React from "react";
import style from "./styles/ErrorMessage.module.css";
import COLORS from "../globalStyles/colors";
//import { ROUTES } from "../../consts";

const ErrorMessage = (props) => {

  return (
    <div className={style.wrapper}
    style={{
      backgroundColor: props.positive ? COLORS.green : COLORS.red
    }}
    >
        <p className={style.text} >{props.text}</p>
        <img onClick={props.closeFunction} src={"/assets/icons/close.svg"} alt={"close icon"}/>
    </div>
  );
};

export default ErrorMessage;
