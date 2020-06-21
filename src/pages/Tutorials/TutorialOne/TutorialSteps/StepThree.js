import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import progress from "./styles/ProgressBarAnimation.module.css";
import Header from "../../TutorialHeader/Header.js";
import PlayButton from "../../../globalComponents/PlayButton.js";
import StepBack from "../../TutorialComponents/ButtonStepBack/StepBack.js";
import StepForward from "../../TutorialComponents/ButtonStepForward/StepForward.js";
import MaterialenNeeded from "../../TutorialComponents/MaterialenNeeded/MaterialenNeeded.js";
//import COLORS from "../../../globalStyles/colors";

const MaterialenOne = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        Bar={true}
        procent="25"
        progress={progress.stapDrie}
        function={props.startFunction}
        Title={`Stap 3`}
        fontSize={"5rem"}
      />
      <StepBack onClick={props.returnFunction} />
      <StepForward onClick={props.nextFunction} />
      <div className={`${style.boekje} ${style.boekje__three}`}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__stepOne}`}
        >
          <div className={style.stepOne__soundbutton}>
            <PlayButton />
          </div>
          <div className={style.stepOne__content}>
            <p
              className={`${style.alternatief__tekst} ${style.tekst__stappen}`}
            >
              8x
            </p>
          </div>
          <img src="../assets/illustraties/stappen/stap3.svg" alt="Stap 1" />
        </div>
      </div>
      <MaterialenNeeded materialen="materialen-stapDrie" />
    </section>
  );
};

export default MaterialenOne;
