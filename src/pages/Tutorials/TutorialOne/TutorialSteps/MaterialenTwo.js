import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/MaterialenOne.module.css";
// import RoundArrowButton from "../../../globalComponents/RoundArrowButton.js";
//import { ROUTES } from "../../consts";
import Header from "../../TutorialHeader/Header.js";
import SoundButton from "../../../globalComponents/SoundButton.js"
import COLORS from "../../../globalStyles/colors";

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
                <div className={`${style.boekje__content__object} ${style.boekje__content__object__materialentwo}`}>
                    <div className={style.materialentwo__object}>
                        <img className={style.materialentwo__object__image} src="../assets/illustraties/schaar.svg"/>
                        <p className={`${style.alternatief__tekst} ${style.tekst__red}`}>Goede schaar</p>
                    </div>
                    <div className={style.materialentwo__object}>
                    <img className={style.materialentwo__object__image} src="../assets/illustraties/plakband.svg"/>
                        <p className={`${style.alternatief__tekst} ${style.tekst__blue}`}>Plakband</p>
                    </div>
                </div>
            </div>
            <div className={`${style.boekje__content__wrapper} ${style.boekje__content__wrapper__alternatief}`}>
                <div className={style.alternatief__content}>
                    <div className={style.alternatief__soundbutton}>
                        <SoundButton play={"welcome"} size={"5.2rem"} reScale={0.8} fillColor={"#FFFFFF"} backgroundColor={COLORS.redDark}/>
                    </div>
                    <p className={style.alternatief__tekst}>Vraag om een <span className={style.tekst__red}>schaar</span> en <span className={style.tekst__blue}>plakband</span> aan je ouders.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialenOne;
