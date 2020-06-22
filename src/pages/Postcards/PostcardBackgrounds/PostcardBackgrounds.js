import React from "react";
import style from "./PostcardBackgrounds.module.css";
import GeneralButton from "../../globalComponents/GeneralButton";
import COLORS from "../../globalStyles/colors";
import StepSidebar from "../StepSidebar/StepSidebar";

const PostcardBackgrounds = (props) => {
  
  const backgrounds = ['monument', 'flagColors', 'mascot', 'country'];

  const handleClick = () => {if(props.postcard.background !== null)props.nextFunction()}
  

  return  (
    <div className={style.container}>

       <div className={style.mainContent}> 
            <StepSidebar current={1}/>

            <ul className={style.postcardOptions}>
                {backgrounds.map((imageName, index) => {
                return <li className={`${style.postcardOptions__option} ${props.postcard.background === imageName ? style.selected : ''}`} key={index}><img onClick={() => {props.onClick({background: imageName, sticker: props.postcard.sticker})}} width={"261"} height={"200"} src={`/assets/postcards/${props.country}/${imageName}.png`} alt={`Postkaart optie ${index}`}/></li>
                })}
            </ul>
        </div>
        <div className={style.nextButton}><GeneralButton onClick={() => {handleClick()}} textColor={COLORS.blackSoft} boxShadow={ `0rem .5rem ${COLORS.green}`} iconBackgroundColor={COLORS.green} backgroundColor={COLORS.greenLight} buttonWidth={"33rem"} buttonHeight={"8rem"} fontSize={"2.4rem"} icon="checkMarkDark"  type="svg" text="Kaartje kiezen"/></div>
    </div>
  );
};

export default PostcardBackgrounds;
