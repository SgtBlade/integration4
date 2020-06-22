import React from "react";
//import { Link } from "react-router-dom";
import style from "../styles/ProjectsOverview.module.css";
//import RoundArrowButton from "../../globalComponents/RoundArrowButton.js";
//import RoundHomeButton from "../../globalComponents/RoundHomeButton.js";
import { ROUTES } from "../../../consts";
import ProjectsHeader from "../ProjectComponents/Header/Header";

const FriendsProjectsOverview = (props) => {
  return (
    <section className={style.container}>
      <ProjectsHeader
        image="vrienden-blackSoft"
        link={ROUTES.FriendsProjects}
      />
      <div className={style.wrapper}>
        {/* Begin kadertje */}
        <div className={style.project}>
          <div className={style.project__pictureBox}>
            <img src="../../assets/illustraties/demo.svg" alt="project" />
          </div>
          <div className={style.project__bar}>
            <div className={style.project__bar__autor}>
              <img
                className={style.project__bar__image}
                src="../../assets/icons/vrienden-blackSoft.svg"
                alt="icon"
              />
              <p className={style.project__bar__name}>Tom</p>
            </div>
            <div className={style.project__bar__buttonbox}>
              <img src="../../assets/icons/postkaartjeToevoegen.svg" alt="" />
            </div>
          </div>
        </div>
        {/* Einde kadertje */}
      </div>
    </section>
  );
};

export default FriendsProjectsOverview;
