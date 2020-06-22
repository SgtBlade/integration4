import React from "react";
import style from "./StepSidebar.module.css";

const StepSidebar = (props) => {

  
  return (
          <ul className={style.progressList}>
              <li className={`${style.progressList__item} ${props.current >=1 ? style.progressList__item__current : ''}`}>Kaartje kiezen <span className={`${style.line} ${props.current >= 1 ? style.line__current : ''}`}></span></li>
              <li className={`${style.progressList__item} ${props.current >= 2 ? style.progressList__item__current : ''}`}>Sticker toevoegen<span className={`${style.line} ${props.current >= 2 ? style.line__current : ''}`}></span></li>
              <li className={`${style.progressList__item} ${props.current >= 3 ? style.progressList__item__current : ''}`}>Versturen!</li>
          </ul>
  );
};

export default StepSidebar;
