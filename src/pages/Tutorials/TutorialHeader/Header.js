import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import RoundArrowButton from "../../globalComponents/RoundArrowButton.js";
import RoundHomeButton from "../../globalComponents/RoundHomeButton.js";
import { ROUTES } from "../../../consts/index.js";

const Header = (props) => {
  return (
    <div className={style.wrapperHead}>
      {props.Return ? (
        <div className={style.buttonWrap}>
          <RoundArrowButton onClick={props.function} />
        </div>
      ) : (
        ""
      )}
      {props.Title ? (
        <h1
          className={style.tutorial__title}
          style={{
            fontSize: props.fontSize ? props.fontSize : "6rem",
          }}
        >
          {props.Title}
        </h1>
      ) : (
        ""
      )}
      <Link to={`${ROUTES.home}`} className={style.buttonWrapHome}>
        <RoundHomeButton onClick={props.function} />
      </Link>
    </div>
  );
};

export default Header;
