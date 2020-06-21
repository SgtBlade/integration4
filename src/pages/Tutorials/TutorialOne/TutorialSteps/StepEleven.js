import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import progress from "./styles/ProgressBarAnimation.module.css";
import Header from "../../TutorialHeader/Header.js";
import PlayButton from "../../../globalComponents/PlayButton.js";
import StepBack from "../../TutorialComponents/ButtonStepBack/StepBack.js";
import StepForward from "../../TutorialComponents/ButtonStepForward/StepForward.js";
import MaterialenNeeded from "../../TutorialComponents/MaterialenNeeded/MaterialenNeeded.js";

const StepEleven = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        Bar={true}
        procent="91"
        progress={progress.stapElf}
        function={props.startFunction}
        Title={`Stap 11`}
        fontSize={"5rem"}
      />
      <StepBack onClick={props.returnFunction} />
      <StepForward onClick={props.nextFunction} />
      <div className={style.boekje}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__stepCenter}`}
        >
          <div className={style.stepOne__soundbutton}>
            <PlayButton />
          </div>
          <img src="../assets/illustraties/stappen/stap11.svg" alt="Stap 11" />
        </div>
      </div>
      <MaterialenNeeded materialen="materialen-stapElf" />
    </section>
  );
};

export default StepEleven;
