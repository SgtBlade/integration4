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

const StepSeven = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        Bar={true}
        procent="58"
        progress={progress.stapZeven}
        function={props.startFunction}
        Title={`Stap 7`}
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
          <img src="../assets/illustraties/stappen/stap7.svg" alt="Stap 4" />
        </div>
      </div>
      <MaterialenNeeded materialen="materialen-stapZeven" />
    </section>
  );
};

export default StepSeven;
