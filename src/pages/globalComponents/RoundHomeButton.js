import React from "react";
import style from "./styles/RoundHomeButton.module.css";
import COLORS from "../globalStyles/colors.js"
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
//import { ROUTES } from "../../consts";

const RoundHomeButton = (props) => {
  return (
    <Link to={ROUTES.home}>
        <div onClick={props.onClick} className={style.wrapper}
        style={{
            fill: props.fillColor ? props.fillColor : COLORS.blue,
            backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.white,
        }}
        >
            <svg className={style.arrow}>
            <path d="M11.2 33C12.3046 33 13.2 32.1046 13.2 31V23.3529C13.2 22.2484 14.0954 21.3529 15.2 21.3529H18.8C19.9046 21.3529 20.8 22.2484 20.8 23.3529V31C20.8 32.1046 21.6954 33 22.8 33H28.3C29.4046 33 30.3 32.1046 30.3 31V19.0695C30.3 18.1864 31.0159 17.4706 31.8989 17.4706V17.4706C33.3559 17.4706 34.0536 15.6809 32.9811 14.6947L18.3537 1.24475C17.5884 0.541049 16.4116 0.54105 15.6463 1.24475L1.01887 14.6947C-0.0536491 15.6809 0.644097 17.4706 2.1011 17.4706V17.4706C2.98415 17.4706 3.7 18.1864 3.7 19.0695V31C3.7 32.1046 4.59543 33 5.7 33H11.2Z"/>
            </svg>
        </div>
    </Link>
  );
};

export default RoundHomeButton;
