import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import Header from "../../TutorialHeader/Header.js";
import StepBack from "../../TutorialComponents/ButtonStepBack/StepBack.js";
import StepForward from "../../TutorialComponents/ButtonStepForward/StepForward.js";
import SoundButton from "../../../globalComponents/SoundButton.js";
import COLORS from "../../../globalStyles/colors";

const TakePicture = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        function={props.returnFunction}
        Title={`Fotoshoot !`}
        fontSize={"5rem"}
      />
      <div className={style.boekje}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__StepEight}`}
        ></div>
      </div>
    </section>
  );
};

export default TakePicture;
