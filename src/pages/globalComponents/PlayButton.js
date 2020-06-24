import React from "react";
import style from "./styles/PlayButton.module.css";
import COLORS from "../globalStyles/colors.js"
//import { ROUTES } from "../../consts";

const PlayButton = (props) => {
  console.log(props.DifferentFunction)
  const play = () =>  {
    new Audio(`/assets/sounds/voiceOver/${props.play}.mp3`).play();
  }

  return (
    <div onClick={props.play ? play : props.DifferentFunction } className={style.wrapper}
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
