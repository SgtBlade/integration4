import React, {useState} from "react";
import style from "./Captcha.module.css";
import Header from "../Header/Header.js";
import GeneralButton from "../../../globalComponents/GeneralButton.js";
import ErrorMessage from "../../../globalComponents/ErrorMessage.js";
import { useObserver } from "mobx-react-lite";
//import { ROUTES } from "../../consts";

let numberOne = Math.floor(Math.random() * 11);
let numberTwo = Math.floor(Math.random() * 11);
let error = false;

const Captcha = (props) => {

  
  const [response, setResponse] = useState("");
  
  const handleSubmit = () => {
    console.log()
      if(parseInt(response) === numberOne*numberTwo) props.nextFunction()
      else {
       numberOne = Math.floor(Math.random() * 11);
       numberTwo = Math.floor(Math.random() * 11);
       error = true;
      }
  }

  const closeError = () => error = false;

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
            <GeneralButton onClick={() => {handleSubmit(); setResponse("")}} buttonWidth={"34.5rem"} fontSize={"3.6rem"} icon="arrowRight" type="svg" text="Verifiëren"/>
          </div>
          <p className={style.extra}>Klik hier om u op een andere manier te verifiëren</p>
        </div>
        <img src={"./assets/illustraties/login-papa.svg"} alt={"Papa uiltje"} />
      </div>
      
      {error ? 
      <ErrorMessage closeFunction={() => {closeError()}} text={"U heeft de vraag fout beantwoord."}/>
      :
      ''
      }
    </div>
  ));
};

export default Captcha;
