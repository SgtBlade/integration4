import React from "react";
import { useObserver } from "mobx-react-lite";
import style from "./SoundWarning.module.css";


const Intro = (props) => {
  
  return useObserver(() => (
    <>
    <img className={style.soundIcon} src={"/assets/icons/sound.svg"} alt={"sound icon"} />
    <p className={style.tekst}>Zet je geluid aan voor de beste ervaring</p>
    <div onClick={props.nextFunction} className={style.play}><img src={"/assets/icons/play.svg"} alt={"play icon"}/></div>
    </>
  ));
};

export default Intro;
