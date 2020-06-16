import React, {useState} from "react";
import style from "./Captcha.module.css";
import Header from "../Header/Header.js";
import GeneralButton from "../../../globalComponents/GeneralButton.js"
import { useObserver } from "mobx-react-lite";
//import { ROUTES } from "../../consts";

const Captcha = (props) => {

  
  const [response, setResponse] = useState("");

  const numberOne = Math.floor(Math.random() * 11);
  const numberTwo = Math.floor(Math.random() * 11);

  
  const handleSubmit = e => {

  }

  return useObserver( () => (
    <div className={style.container}>
      <Header Title={"Even wat viskunde"} Return={true} function={props.returnFunction}/>
    
      <div className={style.capatchaWrapper}>
        <img src={"./assets/illustraties/login-mama.svg"} alt={"Mama uiltje"} />
        <div className={style.contentWrapper}>
          <h1 className={style.contentTitle}>Los volgende wiskundige sommetje op</h1>
          <h2  className={style.contentSubtitle}>Zo weten wij dat u een volwassene bent.</h2>
          <div className={style.quiz}>
            <div className={style.question}>
                <p>{numberOne} x {numberTwo} = </p>

                <input onChange={e => setResponse(e.currentTarget.value)} type="number" value={response} className={style.button} />
            </div>
            <div className={style.nextButton}><GeneralButton buttonWidth={"34.5rem"} fontSize={"3.6rem"} onClick={props.nextFunction} icon="arrowRight" type="svg" text="Verifiëren"/></div>
          </div>
          <p className={style.extra}>Klik hier om u op een andere manier te verifiëren</p>
        </div>
        <img src={"./assets/illustraties/login-papa.svg"} alt={"Papa uiltje"} />
      </div>
    </div>
  ));
};

export default Captcha;
