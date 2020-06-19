import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
// import RoundArrowButton from "../../../globalComponents/RoundArrowButton.js";
//import { ROUTES } from "../../consts";
import Header from "../../TutorialHeader/Header.js";
import SoundButton from "../../../globalComponents/SoundButton.js"
import COLORS from "../../../globalStyles/colors";
import NoIconButton from "../../../globalComponents/NoIconButton";
import StepBack from "../../TutorialComponents/ButtonStepBack/StepBack.js";

const AlternatiefTwo = (props) => {
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
            <div className={style.boekje__content__wrapper}>
                <div className={style.boekje__content__wrapper__verzamel}>
                    <p className={style.boekje__verzamel}>
                        <span className={style.boekje__verzamel__icon}>
                            <img src="../assets/icons/moersleutel.svg" alt="" />
                        </span>
                        Verzamel deze spullen
                    </p>
                    <hr className={style.boekje__verzamel__line} />
                </div>
                <div className={`${style.boekje__content__object} ${style.boekje__content__object___materialenthree}`}>
                <img
                    className={style.materialenthree__afbeelding}
                    src="../assets/illustraties/lijm-grey.svg"
                    alt="houtlijm"
                />
                <p className={`${style.alternatief__tekst} ${style.tekst__gray}`}>Houtlijm</p>
            </div>
            </div>
            <div className={`${style.boekje__content__wrapper} ${style.boekje__content__wrapper__alternatief}`}>
                <div className={style.alternatief__content}>
                    <div className={style.alternatief__soundbutton}>
                        <SoundButton play={"welcome"} size={"5.2rem"} reScale={0.8} fillColor={"#FFFFFF"} backgroundColor={COLORS.redDark}/>
                    </div>
                    <p className={style.alternatief__tekst}>Je kan ook <span className={style.tekst__green}>kauwgom</span> of een andere <span className={style.tekst__blue}>sterke lijm</span> gebruiken</p>
                </div>
                <div className={style.alternatief__options}>
                    <div className={style.alternatief__option}>
                        <img className={style.alternatief__options__image} src="../assets/illustraties/gum.svg" alt=""/>
                        <NoIconButton text={"Kauwgom"} marginTop={"4.5rem"} onClick={props.nextFunction}/>
                    </div>
                    <div className={style.alternatief__option}>
                        <img className={style.alternatief__options__image} src="../assets/illustraties/superglue.svg" alt=""/>
                        <NoIconButton text={"Sterke lijm"} backgroundColor={COLORS.blue} boxShadow={`0 0.5rem ${COLORS.blueDark}`} borderColor={COLORS.blueLight} onClick={props.nextFunction}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AlternatiefTwo;
