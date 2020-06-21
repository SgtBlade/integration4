import React from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import Header from "../../TutorialHeader/Header.js";
import COLORS from "../../../globalStyles/colors";
import GeneralButton from "../../../globalComponents/GeneralButton";

const MaterialenOne = (props) => {
  return (
    <section className={styleBg.container}>
      <Header
        Return={true}
        function={props.returnFunction}
        Title={`Knutselwerkje opslaan`}
        fontSize={"5rem"}
      />
      <div className={style.boekje}>
        <div
          className={`${style.boekje__content} ${style.boekje__content__stepCenter} ${style.boekje__content__stepCenter__bevestigFoto}`}
        >
          <div className={style.bevestigFoto}></div>
        </div>
      </div>
      <div className={style.bevestigFoto__buttons}>
        <div className={style.bevestigFoto__button}>
          <GeneralButton
            text="Nieuwe foto"
            buttonWidth="27.5rem"
            icon="again"
            type="svg"
            boxShadow="0rem .5rem #ED1D54"
            iconBackgroundColor={COLORS.redLight}
            backgroundColor={COLORS.red}
            textColor="#FFFFFF"
          />
        </div>
        <div className={style.bevestigFoto__button}>
          <GeneralButton
            text="Opslaan"
            buttonWidth="27.5rem"
            icon="save"
            type="svg"
          />
        </div>
        <div className={style.stepTwelve__wrapper__uiltje}>
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

export default MaterialenOne;
