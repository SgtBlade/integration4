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

const StepEight = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        Bar={true}
        procent="66"
        progress={progress.stapAcht}
        function={props.startFunction}
        Title={`Stap 8`}
        fontSize={"5rem"}
      />
      <StepBack onClick={props.returnFunction} />
      <StepForward onClick={props.nextFunction} />
      <div className={`${style.boekje} ${style.boekje__eight}`}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__StepEight}`}
        >
          <div className={style.stepOne__soundbutton}>
            <PlayButton play={'welcome'} />
          </div>
          <div className={style.stepFive__wrapper}>
            <div className={style.stepFive__content}>
              <p
                className={`${style.alternatief__tekst} ${style.tekst__stappen}`}
              >
                3x
              </p>
            </div>
            <img
              className={style.stepFive__image}
              src="../assets/illustraties/stappen/stap8-partOne.svg"
              alt="Stap 5"
            />
          </div>
          <div className={style.stepFive__wrapper}>
            <div className={style.stepFive__content}>
              <p
                className={`${style.alternatief__tekst} ${style.tekst__stappen}`}
              >
                3x
              </p>
            </div>
            <img
              className={style.stepFive__image}
              src="../assets/illustraties/stappen/stap8-partTwo.svg"
              alt="Stap 5"
            />
          </div>
        </div>
      </div>
      <MaterialenNeeded materialen="materialen-stapDrie" />
    </section>
  );
};

export default StepEight;
