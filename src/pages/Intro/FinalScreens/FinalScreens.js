import React from "react";
import { useObserver } from "mobx-react-lite";
import style from "./FinalScreens.module.css";
import GeneralButton from "../../globalComponents/GeneralButton";


const FinalScreen = (props) => {
  
  return useObserver(() => (
    <div className={style.frame}
    style={{
        backgroundImage: `url('/assets/illustraties/${props.image}.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
    }}
    >
    <p className={style.title}>{props.text}</p>
    <GeneralButton onClick={props.nextFunction} icon="play" type="svg" text={`${props.button}`}  />
    </div>
  ));
};

export default FinalScreen;
