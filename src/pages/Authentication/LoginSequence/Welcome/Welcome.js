import React from "react";
import style from "./Welcome.module.css";
import Header from "../Header/Header.js";
import SoundButton from "../../../globalComponents/SoundButton.js"
import GeneralButton from "../../../globalComponents/GeneralButton"
import { useStores } from "../../../../hooks/useStores.js";
import { useObserver } from "mobx-react-lite";
//import { ROUTES } from "../../consts";

const Welcome = (props) => {
  const { uiStore } = useStores();

  const startLogin = async () => {
  const email = await prompt("Hohohooo, you found the secred login skipper. Enter your email adress below and get access");
  localStorage.setItem("emailForSignIn", email)
  await uiStore.loginWithEmail(email);
  }

  if (window.location.href.indexOf("apiKey") > -1) {
    uiStore.verifyLogin();
  }

  return useObserver( () => (
    <div className={style.container}>
      <Header Title={"Welkom bij de Reisuil"}/>

      <div className={style.mainContentWrap}>
        <div className={style.textBaloon}>
          <p className={style.mainContentText}>Welkom in mijn bos, mijn naam is Eldrick. Ga je mee op avontuur?</p>
          <div className={style.soundButton}><SoundButton play={"welcome"}/></div>
        </div>

        <div className={style.nextButton}><GeneralButton buttonWidth={"34.5rem"} fontSize={"3.6rem"} onClick={props.nextFunction} icon="arrowRight" type="svg" text="Begin"/></div>
        <div onClick={startLogin} className={style.secretCube}></div>
        <div onClick={props.skipLogin} className={style.alreadyAnAccount}><p>Ik heb al een account</p></div>
        
      </div>
    </div>
  ));
};

export default Welcome;
