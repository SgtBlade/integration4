import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { Link, Redirect, useHistory } from "react-router-dom";
import style from "./Intro.module.css";
import { useStores } from "../../hooks/useStores";
import SoundWarning from "./SoundWarning/SoundWarning"
import GeneralButton from "../globalComponents/GeneralButton";
import COLORS from "../globalStyles/colors";
import { ROUTES } from "../../consts";
import TheThief from "./TheThief/TheThief";

const Intro = () => {
  const { uiStore, friendStore } = useStores();
  const history = useHistory();


  const [currentScreen, setCurrentScreen] = useState();
  const [finalButton, setFinalButton] = useState(false);
  let videoRef = null;

  const SCREENS = {
    SOUNDDISCLAIMER: 'SOUNDDISCLAIMER',
    INTRO: 'INTRO',
    HIDE: 'HIDE',
    INTROTWO: 'INTROTWO',
    THETHIEF: 'THETHIEF',
    ASKAID: 'ASKAID'
  }

  const getScreen = () => {


    let video = null;
    let onEnd = null;
    switch(currentScreen) {
      case SCREENS.SOUNDDISCLAIMER:
        return <SoundWarning nextFunction={() => {setCurrentScreen(SCREENS.INTRO)}}/>
      case SCREENS.INTRO:
        video= 'introPart1.mp4'
        onEnd=()=>{setCurrentScreen(SCREENS.HIDE)}
      break;
      case SCREENS.HIDE:
      return <GeneralButton onClick={()=> {setCurrentScreen(SCREENS.INTROTWO)}} icon="hidden" type="svg" text="Verstop je!" />
      case SCREENS.INTROTWO:
        video= 'introPart2.mp4'
        onEnd=()=>{setCurrentScreen(SCREENS.THETHIEF)}
      break;
      case SCREENS.THETHIEF:
        return <TheThief nextFunction={() => {setCurrentScreen(SCREENS.ASKAID)}}/>
      case SCREENS.ASKAID:
        video= 'introPart3.mp4'
        onEnd=()=>{setFinalButton(true)}
      break;
      default:
        return <SoundWarning nextFunction={() => {setCurrentScreen(SCREENS.INTRO)}}/>
    }

    return (  
    <>
      {finalButton ? 
      <div className={style.finalButton}><GeneralButton 
      onClick={async () => {
        await uiStore.updateChapter(1);
        history.push('map')
      }} 
      icon="thumbBlue" 
      type="svg" 
      text="Ja graag!" /> </div>
    :
    ''}
      
    <div className={style.videoContent}>
      <div onClick={ e => {
        videoRef.pause();
        onEnd();
      }
  }   className={style.skipButton}><img src={'/assets/icons/skip.svg'} alt="skip icon"/></div>
        <video ref={video => (videoRef = video)} className={style.video} onEnded={()=> {onEnd()}} autoPlay>
            <source src={`/assets/videos/${video}`} type="video/mp4" />
            <p>Je internet browser ondersteund geen video</p>
        </video>
      <div className={style.loaderWrap}><div className={style.loader}></div></div>
     </div>
     </>
     )

  }


  return useObserver(() => (
    <div className={style.introContainer}
    style={{
      backgroundImage: (currentScreen === SCREENS.HIDE) || currentScreen === SCREENS.THETHIEF ? 'url("/assets/blobs/blob18-tutorialHide.svg")' : 'url("/assets/blobs/blob17-intro.svg")'}}
    >
      {getScreen()}
    </div>
  ));
};

export default Intro;
