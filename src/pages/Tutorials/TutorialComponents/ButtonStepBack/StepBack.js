import React from "react";
import style from "./StepBack.module.css";

const StepBack = (props) => {
    return (
        <div className={style.oneStepBack}>
          <img onClick={props.onClick} src="../assets/icons/arrowBack.svg" className={style.oneStepBack__image} alt=""/>
      </div>
    );

}

export default StepBack;


