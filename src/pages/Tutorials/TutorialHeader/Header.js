import React from "react";
import style from "./Header.module.css";
import RoundArrowButton from "../../globalComponents/RoundArrowButton.js";
import RoundHomeButton from "../../globalComponents/RoundHomeButton.js";

const Header = (props) => {

  return (
    <div
      className={
        props.Bar
          ? `${style.wrapperHead} ${style.wrapperHead__special}`
          : style.wrapperHead
      }
    >
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
      {props.Bar ? (
        <div className={style.wrapperHead__progressbar}>
          <span
            className={`${style.progressbar__progress} ${props.progress}`}
          ></span>
          <p className={style.progressbar__text}>{props.procent}%</p>
        </div>
      ) : (
        ""
      )}
      <div className={style.buttonWrapHome}>
        <RoundHomeButton />
      </div>
    </div>
  );
};

export default Header;
