import React, { useState } from "react";
import style from "./MaterialenNeeded.module.css";
//import COLORS from "../../../globalStyles/colors";

import { useObserver } from "mobx-react-lite";

const MaterialenNeeded = (props) => {
  const [changeView, changeViewHeight] = useState(true);

  const toggleMaterials = (e) =>
    changeView ? changeViewHeight(false) : changeViewHeight(true);

  return useObserver(() => (
    <>
      {changeView ? (
        <div className={style.materialen}>
          <span className={style.materialen__icon} onClick={toggleMaterials}>
            <img
              src="../assets/icons/arrowTop.svg"
              className={style.materialen__icon__image}
              alt="icon"
            />
          </span>
          <img
            className={style.materialen__image}
            src={`../assets/illustraties/${props.materialen}.svg`}
            alt={props.materialen}
          />
        </div>
      ) : (
        <div className={`${style.materialen} ${style.materialen__up}`}>
          <span className={style.materialen__icon} onClick={toggleMaterials}>
            <img
              src="../assets/icons/arrowTop.svg"
              className={`${style.materialen__icon__image} ${style.materialen__icon__image__turn}`}
              alt="icon"
            />
          </span>
          <img
            className={`${style.materialen__image} ${style.materialen__image__unhidden}`}
            src={`../assets/illustraties/${props.materialen}.svg`}
            alt={props.materialen}
          />
        </div>
      )}
    </>
  ));
};

export default MaterialenNeeded;
