import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import style from "./Postcards.module.css";
import PostcardsHeader from "./PostcardsHeader/PostcardsHeader.js"
import PostcardInitial from "./PostcardInitial/PostcardInitial";
import { ROUTES } from "../../consts";
import PostcardBackgrounds from "./PostcardBackgrounds/PostcardBackgrounds";
import PostcardStickers from "./PostcardStickers/PostcardStickers";
import PostcardConfirm from "./PostcardConfirm/PostcardConfirm";
import { useParams, Redirect } from "react-router-dom";
import { useStores } from "../../hooks/useStores";

const Postcards = () => {


  const { id, user, loc } = useParams();
  const {friendStore} = useStores()
  const [currentUser, setCurrentUser] = useState()

  const getUserWithImage =  () => {
    const userObj = friendStore.friends[friendStore.friends.findIndex((obj => obj.id === user))];
    const image = userObj[loc][id]

    if(!userObj || !image) return <Redirect to={`${ROUTES.FriendsProjectsOverview.to}${loc}`}/>
    else setCurrentUser({user: userObj, image: image})
  }
  const SCREENS = {
    INITIAL: 'INITIAL',
    POSTCARD: 'POSTCARD',
    STICKERS: 'STICKERS',
    CONFIRM: 'CONFIRM'
  }
  const [screen, setScreen] = useState()
  const [postcard, setPostcard] = useState({
    background: null,
    sticker: {name: '', width: 0, height: 0}
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
         component = <PostcardInitial image={currentUser.image.link}  nextFunction={() => {setScreen(SCREENS.POSTCARD)}}/>
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
        component = <PostcardInitial location={loc} userData={currentUser} image={currentUser.image.link}  nextFunction={() => {setScreen(SCREENS.POSTCARD)}}/>
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
    !currentUser ?
    getUserWithImage()
    :
    getScreen()
  ));
};

export default Postcards;
