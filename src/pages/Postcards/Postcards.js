import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import style from "./Postcards.module.css";
import PostcardsHeader from "./PostcardsHeader/PostcardsHeader.js"
import PostcardInitial from "./PostcardInitial/PostcardInitial";
import { ROUTES } from "../../consts";
import PostcardBackgrounds from "./PostcardBackgrounds/PostcardBackgrounds";
import PostcardStickers from "./PostcardStickers/PostcardStickers";
import PostcardConfirm from "./PostcardConfirm/PostcardConfirm";

const Postcards = () => {

  const SCREENS = {
    INITIAL: 'INITIAL',
    POSTCARD: 'POSTCARD',
    STICKERS: 'STICKERS',
    CONFIRM: 'CONFIRM'
  }
  const [screen, setScreen] = useState(SCREENS.CONFIRM)
  const [postcard, setPostcard] = useState({
    background: 'country',
    sticker: {name: 'sticker1', width: 96, height: 96}
  })
  const country = 'France' // -> DIT WORDT DAN MEE GEGEVEN MET PROPS

  const getScreen = () => {

    let title = '';
    let component = null;
    let previousScreen = null;
    let extraClass = '';

    switch (screen){
      case SCREENS.INITIAL:
         title = 'Werkje van Sara';
         previousScreen = ROUTES[country]
         component = <PostcardInitial  nextFunction={() => {setScreen(SCREENS.POSTCARD)}}/>
         break;
      case SCREENS.POSTCARD:
        title = 'Kies je postkaartje';
        previousScreen = () => {setScreen(SCREENS.INITIAL)}
        component = <PostcardBackgrounds  nextFunction={() => {setScreen(SCREENS.STICKERS)}} postcard={postcard} onClick={setPostcard} country={country}/>
        break;
      case SCREENS.STICKERS:
          title = 'Sticker toevoegen';
          previousScreen = () => {setScreen(SCREENS.POSTCARD)}
          component = <PostcardStickers  nextFunction={() => {setScreen(SCREENS.CONFIRM)}} postcard={postcard} onClick={setPostcard} country={country}/>
          break;
      case SCREENS.CONFIRM:
          title = 'Dit kaartje versturen?';
          previousScreen = () => {setScreen(SCREENS.POSTCARD)}
          extraClass = 'extraClass'
          component = <PostcardConfirm nextFunction={() => {setScreen(SCREENS.POSTCARD)}} postcard={postcard} onClick={setPostcard} country={country}/>
          break;
      default:
        title = 'Werkje van Sara';
        previousScreen = ROUTES[country]
        component = <PostcardInitial nextFunction={() => {setScreen(SCREENS.POSTCARD)}}/>
        break;
    }

    return (
      <div className={`${style.container} ${style[extraClass]}`}>
        <div className={style.header}><PostcardsHeader returnFunction={previousScreen}  country={country} title={`${title}`}/></div>
        <div className={style.mainContent}>{component}</div>
      </div>
    )
  }
  
  return useObserver(() => (
      getScreen()
  ));
};

export default Postcards;
