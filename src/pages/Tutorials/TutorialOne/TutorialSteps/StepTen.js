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

const StepTen = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        Bar={true}
        procent="83"
        progress={progress.stapTien}
        function={props.startFunction}
        Title={`Stap 10`}
        fontSize={"5rem"}
      />
      <StepBack onClick={props.returnFunction} />
      <StepForward onClick={props.nextFunction} />
      <div className={`${style.boekje} ${style.boekje__ten}`}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__stepCenter}`}
        >
          <p
            className={`${style.alternatief__tekst} ${style.tekst__stappen} ${style.tekst__stappen__noparent__end}`}
          >
            6x
          </p>
          <div className={style.stepOne__soundbutton}>
            <PlayButton />
          </div>
          <img src="../assets/illustraties/stappen/stap10.svg" alt="Stap 4" />
        </div>
      </div>
      <MaterialenNeeded materialen="materialen-stapTien" />
    </section>
  );
};

export default StepTen;
