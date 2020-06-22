import React from "react";
import { Link } from "react-router-dom";
import style from "./Frankrijk.module.css";
import RoundArrowButton from "../globalComponents/RoundArrowButton.js";
import RoundHomeButton from "../globalComponents/RoundHomeButton.js";
import { ROUTES } from "../../consts";

const FrankrijkHeader = (props) => {
  return (
    <div className={style.wrapperHead}>
      <h1 className={style.hidden}>Speel opnieuw</h1>
      <Link to={ROUTES.map} className={style.buttonWrap}>
        <RoundArrowButton />
      </Link>
      <div className={style.buttonWrapHome}>
        <RoundHomeButton />
      </div>
    </div>
  );
};

export default FrankrijkHeader;
