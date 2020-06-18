import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/MaterialenOne.module.css";
// import RoundArrowButton from "../../../globalComponents/RoundArrowButton.js";
//import { ROUTES } from "../../consts";
import Header from "../../TutorialHeader/Header.js";

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
        </div>
      </div>
    </section>
  );
};

export default MaterialenOne;