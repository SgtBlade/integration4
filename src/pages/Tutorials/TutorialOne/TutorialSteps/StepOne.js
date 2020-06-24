import React, { useState } from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import progress from "./styles/ProgressBarAnimation.module.css";
import Header from "../../TutorialHeader/Header.js";
import PlayButton from "../../../globalComponents/PlayButton.js";
import StepBack from "../../TutorialComponents/ButtonStepBack/StepBack.js";
import StepForward from "../../TutorialComponents/ButtonStepForward/StepForward.js";
import MaterialenNeeded from "../../TutorialComponents/MaterialenNeeded/MaterialenNeeded.js";

const MaterialenOne = (props) => {

  const [tutorial, setTutorial] = useState(false);

  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        Bar={true}
        procent="8"
        progress={progress.stapEen}
        function={props.startFunction}
        Title={`Stap 1`}
        fontSize={"5rem"}
      />
      <StepBack onClick={props.returnFunction} />
      <StepForward onClick={props.nextFunction} />
      <div className={style.boekje}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__stepOne}`}
        >
          <div className={style.stepOne__soundbutton}>
            <PlayButton DifferentFunction={()=> {setTutorial(true)}} />
          </div>
          <div className={style.stepOne__content}>
            <p
              className={`${style.alternatief__tekst} ${style.tekst__stappen} ${style.tekst__stappen__one}`}
            >
              4x
            </p>
          </div>

          {tutorial ?
          <video
          style={{
            maxWidth: "550px"
          }}
          className={style.video} autoPlay onEnded={() => {setTutorial(false)}}>
            <source src={`/assets/videos/tutorial/stepOne.mp4`} type="video/mp4" />
          <p>Je internet browser ondersteund geen video</p>
          </video>
          :
          <img src="../assets/illustraties/stappen/stap1.svg" alt="Stap 1" />
          }
          
        </div>
      </div>

      <MaterialenNeeded
        guidedUser={props.guidedUser}
        setGuidedUser={props.setGuidedUser}
        materialen="materialen-stapEen"
      />
    </section>
  );
};

export default MaterialenOne;
