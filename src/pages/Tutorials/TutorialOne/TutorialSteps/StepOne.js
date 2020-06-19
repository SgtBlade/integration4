import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import Header from "../../TutorialHeader/Header.js";
import PlayButton from "../../../globalComponents/PlayButton.js"
import StepBack from "../../TutorialComponents/ButtonStepBack/StepBack.js";
//import COLORS from "../../../globalStyles/colors";

const MaterialenOne = (props) => {
  return (
    <section className={styleBg.container}>
       <Header
        Return={true}
        function={props.startFunction}
        Title={`Materialen`}
        fontSize={"5rem"}
      />
      <StepBack onClick={props.returnFunction}/>
      <div className={style.boekje}>
        <div className={`${style.boekje__content} ${style.boekje__content__stepOne}`}>
          <div className={style.stepOne__soundbutton}>
            <PlayButton />
          </div>
          <div className={style.stepOne__content}>
            <p className={`${style.alternatief__tekst} ${style.tekst__stappen}`}>4x</p>
          </div>
          <img src="../assets/illustraties/stappen/stap1.svg" alt="Stap 1"/>
        </div>
      </div>
      div.
    </section>
  );
};

export default MaterialenOne;
