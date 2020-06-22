import React from "react";
import style from "./PostcardStickers.module.css";
import GeneralButton from "../../globalComponents/GeneralButton";
import COLORS from "../../globalStyles/colors";
import StepSidebar from "../StepSidebar/StepSidebar";
import { useObservable, useObserver } from "mobx-react-lite";

const PostcardStickers = (props) => {
  
  const stickers = [{name: 'sticker1', width: 96, height: 96}, {name: 'sticker2', width: 149, height: 36}, {name: 'sticker3', width: 130, height: 87}, {name: 'sticker4', width: 137, height: 110}]

  const handleClick = () => {if(props.postcard.sticker !== null)props.nextFunction()}
  

  return useObserver( () => (
    <div className={style.container}>

       <div className={style.mainContent}> 
            <StepSidebar current={2}/>

            <ul className={style.postcardOptions}>
                {stickers.map((sticker, index) => {
                return <li 
                onClick={() => {props.onClick({background: props.postcard.background, sticker: sticker})}} 
                style={{backgroundImage: `url('/assets/postcards/${props.country}/${props.postcard.background}.png')`}} 
                className={`${style.postcardOptions__option} ${props.postcard.sticker.name === sticker.name ? style.selected : ''}`} 
                key={index}>

                <img 
                className={`${style.stickerImage} ${style[sticker.name]}`}
                width={`${sticker.width}`} 
                height={`${sticker.height}`} 
                src={`/assets/postcards/${props.country}/${sticker.name}.png`} 
                alt={`Postkaart optie ${index}`}/></li>
                })}
            </ul>
        </div>
        <div className={style.nextButton}><GeneralButton onClick={() => {handleClick()}} textColor={COLORS.blackSoft} boxShadow={ `0rem .5rem ${COLORS.green}`} iconBackgroundColor={COLORS.green} backgroundColor={COLORS.greenLight} buttonWidth={"33rem"} buttonHeight={"8rem"} fontSize={"2.4rem"} icon="checkMarkDark"  type="svg" text="Sticker kiezen"/></div>

    </div>
  ));
};

export default PostcardStickers;
