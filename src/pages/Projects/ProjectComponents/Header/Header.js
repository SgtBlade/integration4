import React from "react";
import { Link } from "react-router-dom";
import style from "./HeaderProjects.module.css";
import RoundArrowButton from "../../../globalComponents/RoundArrowButton.js";
import RoundHomeButton from "../../../globalComponents/RoundHomeButton.js";
import COLORS from "../../../globalStyles/colors";
//import { ROUTES } from "../../../../consts";

const ProjectsHeader = (props) => {
  return (
    <div className={style.wrapperHead}>
      <Link to={props.link} className={style.buttonWrap}>
        <RoundArrowButton />
      </Link>
      <h1
        className={style.title}
        style={{
          color: props.color ? props.color : COLORS.blackSoft,
        }}
      >
        <img
          className={style.title__icon}
          src={`../../assets/icons/${props.image}.svg`}
          alt="icon"
        />
        Werkjes van vrienden
      </h1>
      <div className={style.buttonWrapHome}>
        <RoundHomeButton />
      </div>
    </div>
  );
};

export default ProjectsHeader;
