import React from "react";
import style from './styles/NoIconButton.module.css';
import COLORS from '../globalStyles/colors.js';

const NoIconButton = (props) => {

  return (
    <div onclick={props.onclick} className={style.buttonNoIcon__wrapper} style={{
        marginTop: props.marginTop ? props.marginTop : "3.5rem"
    }}>
        <span className={style.buttonNoIcon} style={{
            backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.green,
            boxShadow: props.boxShadow ? props.boxShadow : `0rem .5rem ${COLORS.greenDark}`,
            borderColor: props.borderColor ? props.borderColor : COLORS.greenLight,
        }}>{props.text}</span>
    </div>
  );
};

export default NoIconButton;
