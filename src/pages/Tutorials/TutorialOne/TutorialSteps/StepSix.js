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
        procent="50"
        progress={progress.stapZes}
        function={props.startFunction}
        Title={`Stap 6`}
        fontSize={"5rem"}
      />
      <StepBack onClick={props.returnFunction} />
      <StepForward onClick={props.nextFunction} />
      <div className={style.boekje}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__stepCenter} ${style.boekje__content__stepCenter__lessPaddingLeft}`}
        >
          <div className={style.stepOne__soundbutton}>
            <PlayButton />
          </div>
          <img src="../assets/illustraties/stappen/stap6.svg" alt="Stap 6" />
        </div>
      </div>
      <MaterialenNeeded materialen="materialen-stapZes" />
    </section>
  );
};

export default MaterialenOne;
