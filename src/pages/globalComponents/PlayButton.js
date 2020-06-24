import React from "react";
import style from "./styles/PlayButton.module.css";
import COLORS from "../globalStyles/colors.js"
//import { ROUTES } from "../../consts";

const PlayButton = (props) => {

  const play = () =>  {
    new Audio(`./assets/animations/tutorials/${props.play}.mp4`).play();
  }

  return (
    <div onClick={props.DifferentFunction ? props.DifferentFunction : play} className={style.wrapper}
    style={{
        fill: props.fillColor ? props.fillColor : COLORS.blueDark,
        backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.green,
    }}
    >
        <svg className={style.icon}
          style={{
            transform: props.reScale ? `scale(${props.reScale})` : "scale(0.7)"
          }}
          >
          <path d="M0.0625 0.747803V34.9905L27.0962 17.8692L0.0625 0.747803Z" fill="#FFFFFF"/>
       </svg>
    </div>
  );
};

export default PlayButton;
