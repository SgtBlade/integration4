import React from "react";
import style from "./Welcome.module.css";
import Header from "../Header/Header.js";
import SoundButton from "../../../globalComponents/SoundButton.js"
import GeneralButton from "../../../globalComponents/GeneralButton"
import { useObserver } from "mobx-react-lite";
//import { ROUTES } from "../../consts";

const Welcome = (props) => {

  return useObserver( () => (
    <div className={style.container}>
      <Header Title={"Welkom bij de Reisuil"}/>

      <div className={style.mainContentWrap}>
        <div className={style.textBaloon}>
          <p className={style.mainContentText}>welkom in mijn bos, mijn naam is Eldrick. Ga je mee op avontuur?</p>
          <div className={style.soundButton}><SoundButton play={"welcome"}/></div>
        </div>

        <div className={style.nextButton}><GeneralButton buttonWidth={"34.5rem"} fontSize={"3.6rem"} onClick={props.returnFunction} icon="arrowRight" type="svg" text="Begin"/></div>
      </div>
    </div>
  ));
};

export default Welcome;
