import React from "react";
import { useObserver } from "mobx-react-lite";
import style from "./Map.module.css";
import { useStores } from "../../hooks/useStores";
import FullMap from "./mapComponents/FullMap.js";
import RoundArrowButton from "../globalComponents/RoundArrowButton.js"
import COLORS from "../globalStyles/colors";
import STORYLINE from "../A_userVariables/storyLine.js";
import { useHistory, Link } from "react-router-dom";
import { ROUTES } from "../../consts";


const Map = () => {
  const { uiStore } = useStores();
  const history = useHistory();

  console.log(uiStore.currentUser)
  const handleClick = (e, geo) => {if(ROUTES[geo.properties.NAME])history.push(ROUTES[geo.properties.NAME])};

  const beginAssignment = (country) => {history.push(ROUTES[`Task${country}`])}

  return useObserver(() => (
    <div className={style.content}>
      <div className={style.map}>
        <FullMap function={handleClick}/>
      </div>

      <div className={style.mapBanner}>
          <Link to={ROUTES.home} className={style.mapBanner__Buttons}><RoundArrowButton/></Link>
      </div>

      <ul className={style.storyMap}>


      {STORYLINE.map((key, index) => {
                return ([
                <li key={index} className={style.storyMap__Item}
                  onClick={
                    parseInt(uiStore.currentUser.chapter) === index+1 ? () => beginAssignment(key.imageName) : parseInt(uiStore.currentUser.chapter) > index+1 ? 
                    () => history.push('Frankrijk') : null}//verander naar key.``dutchName als er meerdere landen zijn
                  style={{
                    borderColor: parseInt(uiStore.currentUser.chapter) > index+1 ? COLORS.grey : parseInt(uiStore.currentUser.chapter) === index+1 ? COLORS.redDark : COLORS.white,
                    backgroundImage: parseInt(uiStore.currentUser.chapter) > index+1 ? `url('/assets/flags/${key.imageName}.svg')` : 'none',}}
                    >
                  <p className={style.storyMap__Chapter} style={{color: key.contrastColor ? COLORS.white : COLORS.black}}>{index+1}</p>
                </li>,
        
                (index+1 < STORYLINE.length) && (uiStore.currentUser.chapter-STORYLINE.length <= STORYLINE.length-(index+1) )?
                  (
                  <li key={index+100} className={style.storyMapLine}
                  style={{
                    marginLeft: `${(18*index)+15}rem`
                  }}
                  >
                  <svg width="178" height="10" viewBox="0 0 178 10"  xmlns="http://www.w3.org/2000/svg"> 
                  <path style={{stroke: index+2 === uiStore.currentUser.chapter ? COLORS.redDark : COLORS.grey}} d="M173 5.00024L5 5.00024" stroke="white" strokeWidth="10" strokeLinecap="round" strokeDasharray="10 15"/> </svg>
                  </li>
                  )
                  :
                  ''
              ])
      })}

      </ul>
    </div>
  ));
};

export default Map;
