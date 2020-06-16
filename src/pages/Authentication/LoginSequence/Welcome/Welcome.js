import React, { useState } from "react";
import style from "./Welcome.module.css";
import Header from "../Header/Header.js";
import SoundButton from "../../../globalComponents/SoundButton.js"
import GeneralButton from "../../../globalComponents/GeneralButton"
import { useStores } from "../../../../hooks/useStores";
//import { ROUTES } from "../../consts";

const Welcome = () => {
  return (
    <div className={style.container}>
      <Header Title={"Welkom bij de Reisuil"}/>

      <div className={style.mainContentWrap}>
        <div className={style.textBaloon}>
          <p className={style.mainContentText}>welkom in mijn bos, mijn naam is Eldrick. Ga je mee op avontuur?</p>
          <div className={style.soundButton}><SoundButton play={"welcome"}/></div>
        </div>

        <img className={style.image} src={"./assets/illustraties/uiltjePointing-login.svg"}/>
        

        <div className={style.nextButton}><GeneralButton onClick={() => {}} icon="arrowRight" type="svg" text="Begin"/></div>
      </div>
    </div>
  );
};

export default Welcome;
