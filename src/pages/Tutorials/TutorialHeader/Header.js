import React from "react";
import style from "./Header.module.css";
import RoundArrowButton from "../../globalComponents/RoundArrowButton.js";
import RoundHomeButton from "../../globalComponents/RoundHomeButton.js";

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
      <div className={style.buttonWrapHome}>
        <RoundHomeButton />
      </div>
    </div>
  );
};

export default Header;
