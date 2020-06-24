import React from "react";
import style from "./styles/AlertMessage.module.css";
import GeneralButton from "./GeneralButton";
import COLORS from "../globalStyles/colors";

const AlertMessage = (props) => {


  return (
        <div className={style.uploadMessage}>
              <p className={style.uploadMessage__text}>{props.text}</p>
                <GeneralButton
                  onClick={props.function}
                  text={`${props.titel}`}
                  icon="checkMark"
                  type="svg"
                  boxShadow={`0rem .5rem ${COLORS.greenLight}`}
                  iconBackgroundColor={COLORS.greenLight}
                  backgroundColor={COLORS.green}
                  textColor="#FFFFFF"
                />
        </div>
  );
};

export default AlertMessage;
