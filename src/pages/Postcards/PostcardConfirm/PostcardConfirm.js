import React from "react";
import style from "./PostcardConfirm.module.css";
import GeneralButton from "../../globalComponents/GeneralButton";
import COLORS from "../../globalStyles/colors";
import StepSidebar from "../StepSidebar/StepSidebar";
import { useHistory } from "react-router-dom";

const PostcardConfirm = (props) => {
  
  const history = useHistory()
  const handleSumbit = () => {history.push('')}

  return (
    <div className={style.container}>

      <div className={style.mainContent}>
        <StepSidebar current={3}/>
        <div className={style.image} style={{backgroundImage: `url('../assets/postcards/${props.country}/${props.postcard.background}.svg')`}} >
        <img 
          className={style.sticker}
          width={`${props.postcard.stickerwidth}`} 
          height={`${props.postcard.stickerheight}`} 
          src={`/assets/postcards/${props.country}/${props.postcard.sticker.name}.svg`} 
          alt={`Postkaart`}/>
        </div>
      </div>

      <div className={style.nextButton}><GeneralButton onClick={() => {handleSumbit()}} textColor={COLORS.blackSoft} boxShadow={ `0rem .5rem ${COLORS.green}`} iconBackgroundColor={COLORS.green} backgroundColor={COLORS.greenLight} buttonWidth={"33rem"} buttonHeight={"8rem"} fontSize={"2.4rem"} icon="planeDark"  type="svg" text="Sticker kiezen"/></div>


    </div>
  );
};

export default PostcardConfirm;
