import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
// import RoundArrowButton from "../../../globalComponents/RoundArrowButton.js";
//import { ROUTES } from "../../consts";
import Header from "../../TutorialHeader/Header.js";
import SoundButton from "../../../globalComponents/SoundButton.js"
import COLORS from "../../../globalStyles/colors";
import NoIconButton from "../../../globalComponents/NoIconButton";

const MaterialenOne = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        function={props.returnFunction}
        Title={`Materialen`}
        fontSize={"5rem"}
      />
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
                <div className={style.boekje__content__object}>
                    <div className={style.object__content}>
                        <p className={`${style.boekje__tekst} ${style.boekje__tekst__gray}`}>
                            <span className={style.boekje__tekstBig}>30</span>x
                        </p>
                        <p className={`${style.boekje__tekstMed} ${style.boekje__tekst__gray}`}>Houten stokjes</p>
                    </div>
                    <img
                        className={style.boekje__afbeelding}
                        src="../assets/illustraties/stokje-grijs.svg"
                        alt=""
                    />
                </div>
            </div>
            <div className={`${style.boekje__content__wrapper} ${style.boekje__content__wrapper__alternatief}`}>
                <div className={style.alternatief__content}>
                    <div className={style.alternatief__soundbutton}>
                        <SoundButton play={"welcome"} size={"5.2rem"} reScale={0.8} fillColor={"#FFFFFF"} backgroundColor={COLORS.redDark}/>
                    </div>
                    <p className={style.alternatief__tekst}>Geen probleem, je kan ook <span className={style.tekst__green}>rietjes</span> of <span className={style.tekst__blue}>oorstokjes</span> gebruiken</p>
                </div>
                <div className={style.alternatief__options}>
                    <div className={style.alternatief__option}>
                        <img className={style.alternatief__options__image} src="../assets/illustraties/straws.svg" alt=""/>
                        <NoIconButton text={"Rietjes"} marginTop={"4.5rem"} onClick={props.nextFunction}/>
                    </div>
                    <div className={style.alternatief__option}>
                        <img className={style.alternatief__options__image} src="../assets/illustraties/oorstokjes.svg" alt=""/>
                        <NoIconButton text={"Oorstokjes"} backgroundColor={COLORS.blue} boxShadow={`0 0.5rem ${COLORS.blueDark}`} borderColor={COLORS.blueLight} onClick={props.nextFunction}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialenOne;
