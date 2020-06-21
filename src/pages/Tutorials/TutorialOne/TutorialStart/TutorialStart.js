import React from "react";
import { Link } from "react-router-dom";
import style from "./TutorialStart.module.css";
import Header from "../../TutorialHeader/Header.js";
import { ROUTES } from "../../../../consts/index.js";
import RoundArrowButton from "../../../globalComponents/RoundArrowButton.js";
import GeneralButton from "../../../globalComponents/GeneralButton";

const TutorialStart = (props) => {
  return (
    <section className={style.wrapper}>
      <Link to={ROUTES.home} className={style.buttonWrap}>
        <RoundArrowButton onClick={props.function} />
      </Link>
      <Header Title={`Eiffeltoren`} />
      <div className={style.wrapperContent}>
        <div className={style.wrapperContent__tekstbubbel}>
          <img
            className={style.wrapperContent__tekstbubbel__afbeelding}
            src="../assets/illustraties/tekstbubbel-tutorial.svg"
            alt="tekstbubbel"
          />
          <p className={style.wrapperContent__tekstbubbel__tekst}>
            {props.tekstBubbel}
          </p>
        </div>
        <div className={style.nextButton}>
          <GeneralButton
            buttonWidth={"34.5rem"}
            fontSize={"2.8rem"}
            onClick={props.nextFunction}
            icon="play"
            type="svg"
            text="Begin knutselen"
          />
        </div>
      </div>
    </section>
  );
};

export default TutorialStart;
