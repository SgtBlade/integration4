import React, { useState } from "react";
import style from "./Welcome.module.css";
import Header from "../Header/Header.js";
import SoundButton from "../../../globalComponents/SoundButton.js"
import { useStores } from "../../../../hooks/useStores";
//import { ROUTES } from "../../consts";

const Welcome = () => {
  return (
    <div className={style.container}>
      <Header Title={"Welkom bij de Reisuil"}/>

      <div className={style.mainContentWrap}>
        <div className={style.textBaloon}>
          <p className={style.mainContentText}>welkom in mijn bos, mijn naam is Eldrick. Ga je mee op avontuur?</p>
          <SoundButton/>
        </div>

        <img src={"./assets/illustraties/uiltje-home.svg"}/>
        
      </div>
    </div>
  );
};

export default Welcome;
