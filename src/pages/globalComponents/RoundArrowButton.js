import React from "react";
import style from "./styles/RoundArrowButton.module.css";
import COLORS from "../globalStyles/colors.js"
//import { ROUTES } from "../../consts";

const RoundArrowButton = (props) => {
  return (
    <div onClick={props.onClick} className={style.wrapper}
    style={{ 
        fill: props.fillColor ? props.fillColor : COLORS.blue,
        backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.white,
    }}
    >
        <svg className={style.arrow}>
            <path d="M16.1382 1.33686C17.6179 -0.303475 20.1473 -0.433671 21.7876 1.04606C23.4279 2.52579 23.5581 5.0551 22.0784 6.69543L13.8867 15.7762H47.7063C49.9155 15.7762 51.7063 17.567 51.7063 19.7762C51.7063 21.9853 49.9155 23.7762 47.7063 23.7762H13.8372L22.1288 33.3268C23.5771 34.9949 23.3988 37.5213 21.7306 38.9696C20.0625 40.4179 17.5361 40.2396 16.0878 38.5714L1.96052 22.2991C0.635543 20.7729 0.657172 18.4982 2.01093 16.9975L16.1382 1.33686Z"/>
        </svg>
    </div>
  );
};

export default RoundArrowButton;
