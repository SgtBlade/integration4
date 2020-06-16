import React from "react";
import style from "./Captcha.module.css";
import Header from "../Header/Header.js";
import { useObserver } from "mobx-react-lite";
//import { ROUTES } from "../../consts";

const Captcha = (props) => {

  return useObserver( () => (
    <div className={style.container}>
      <Header Title={"Even wat viskunde"} Return={true} function={props.returnFunction}/>
    
      <div className={style.capatchaWrapper}>
        <img src={"./assets/illustraties/login-mama.svg"} alt={"Mama uiltje"} />
        <div className={style.contentWrapper}>
          <h1 className={style.contentTitle}>Los volgende wiskundige sommetje op</h1>
          <h2  className={style.contentSubtitle}>Zo weten wij dat u een volwassene bent.</h2>
          <div className={style.quiz}>
            input stuff
          </div>
          <p  className={style.extra}>Klik hier om u op een andere manier te verifiëren</p>
        </div>
        <img src={"./assets/illustraties/login-papa.svg"} alt={"Papa uiltje"} />
      </div>
    </div>
  ));
};

export default Captcha;
