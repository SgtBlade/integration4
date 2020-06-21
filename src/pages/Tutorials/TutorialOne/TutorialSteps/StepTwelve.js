import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import progress from "./styles/ProgressBarAnimation.module.css";
import Header from "../../TutorialHeader/Header.js";
import PlayButton from "../../../globalComponents/PlayButton.js";
import StepBack from "../../TutorialComponents/ButtonStepBack/StepBack.js";
import StepForward from "../../TutorialComponents/ButtonStepForward/StepForward.js";
import SoundButton from "../../../globalComponents/SoundButton.js";
import COLORS from "../../../globalStyles/colors";

const StepTwelve = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        Bar={true}
        procent="100"
        progress={progress.stapTwaalf}
        function={props.startFunction}
        Title={`Stap 12`}
        fontSize={"5rem"}
      />
      <StepBack onClick={props.returnFunction} />
      <StepForward onClick={props.nextFunction} />
      <div className={`${style.boekje} ${style.boekje__twelve}`}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__StepEight}`}
        >
          <div className={style.stepOne__soundbutton}>
            <PlayButton />
          </div>
          <div
            className={`${style.stepTwelve__wrapper} ${style.stepTwelve__wrapper__partOne}`}
          >
            <img
              src="../assets/illustraties/stappen/stap12-partOne.svg"
              className={style.stepTwelve__wrapper__partOne__image}
              alt="toren"
            />
            <p
              className={`${style.stepTwelve__tekst} ${style.tekst__red}`}
              alt="toren"
            >
              Klaar!
            </p>
          </div>
          <div
            className={`${style.stepTwelve__wrapper} ${style.stepTwelve__wrapper__partTwo}`}
          >
            <h2 className={`${style.stepTwelve__titel} ${style.tekst__blue}`}>
              Voorbeeld
            </h2>
            <div className={style.stepTwelve__options}>
              <div className={style.stepTwelve__option}>
                <img
                  src="../assets/illustraties/stappen/stap12-partTwo-touw.svg"
                  alt="touw"
                />
                <p
                  className={`${style.alternatief__tekst} ${style.tekst__red}`}
                >
                  Touw
                </p>
              </div>
              <div className={style.stepTwelve__option}>
                <img
                  src="../assets/illustraties/stappen/stap12-partTwo-karton.svg"
                  alt="touw"
                />
                <p
                  className={`${style.alternatief__tekst} ${style.tekst__red}`}
                >
                  Karton
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.stepTwelve__wrapper__uiltje}>
          <div className={style.uiltje__content}>
            <div className={style.uiltje__wrapper}>
              <div className={style.uitlje__content__spraak}>
                <img
                  src="../assets/illustraties/spraakbubbel-laatsteStap.svg"
                  alt=""
                  className={style.uitlje__content__spraak__image}
                />
                <p className={style.uitlje__content__spraak__tekst}>
                  Versier je Eiffeltorentje zoals je het zelf wilt.
                </p>
              </div>
            </div>
            <div className={style.uitlje__content__button}>
              <SoundButton
                play={"welcome"}
                size={"5.2rem"}
                reScale={0.8}
                fillColor={"#FFFFFF"}
                backgroundColor={COLORS.green}
              />
            </div>
          </div>
          <img
            src="../assets/illustraties/uiltje-staant-laatsteStap.svg"
            alt="uiltje"
            className={style.uiltje__image}
          />
        </div>
      </div>
    </section>
  );
};

export default StepTwelve;
