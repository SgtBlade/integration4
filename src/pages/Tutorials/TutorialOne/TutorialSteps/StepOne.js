import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import Header from "../../TutorialHeader/Header.js";
import SoundButton from "../../../globalComponents/SoundButton.js"
import ThumbsUp from "../../TutorialComponents/ButtonThumb/ThumbsUp.js";
import StepBack from "../../TutorialComponents/ButtonStepBack/StepBack.js";
import COLORS from "../../../globalStyles/colors";

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
        <div className={style.boekje__content}>
            
        </div>
      </div>
    </section>
  );
};

export default MaterialenOne;
