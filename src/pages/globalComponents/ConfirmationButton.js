import React from "react";
import style from './styles/ConfirmationButton.module.css';
import COLORS from '../globalStyles/colors.js';

const ConfirmationButton = (props) => {
  if(!props.text) throw new Error("no button text given");

  return (
    <div onClick={props.onClick} className={style.buttonWrap} style={{
      backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.green,
      width: props.width ? props.width : "31.33rem",
      height: props.height ? props.height : "7.53rem",
      borderRadius: props.borderRadius ? `${props.borderRadius}` : "1.5rem",
      shadowColor: props.shadowColor ? props.shadowColor : COLORS.black,
      shadowOffset: {
          width: props.shadowWidth ? `${props.shadowWidth}rem` : 0,
          height: props.shadowHeight ? `${props.shadowHeight}rem` :  ".9rem",
      },
      shadowOpacity: props.shadowOpacity ? props.shadowOpacity : 0.25,
      shadowRadius: props.shadowRadius ? `${props.shadowRadius}rem` : ".2rem",}}>
        <p className={style.button} style={{color: props.color ? props.color : COLORS.white,
      fontSize: props.fontSize ? props.fontSize : "3.6rem",}}>{props.text}</p>
    </div>
  );
};

export default ConfirmationButton;
