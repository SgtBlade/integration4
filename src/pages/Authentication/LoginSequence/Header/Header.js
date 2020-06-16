import React from "react";
import style from "./Header.module.css";
import RoundArrowButton from "../../../globalComponents/RoundArrowButton.js";
//import { ROUTES } from "../../consts";

const Welcome = (props) => {

  return (
    <div className={style.wrapper}>
      {props.Title ? 
      <p className={style.title}>{props.Title}</p>
        :
      ''
      }
      {props.Return ? 
        <div className={style.buttonWrap}>
          <RoundArrowButton onClick={props.function}/>
        </div>
      :
      ''
      }
    </div>
  );
};

export default Welcome;
