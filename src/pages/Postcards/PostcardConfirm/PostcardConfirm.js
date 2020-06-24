import React, { useState } from "react";
import style from "./PostcardConfirm.module.css";
import GeneralButton from "../../globalComponents/GeneralButton";
import AlertMessage from "../../globalComponents/AlertMessage";
import COLORS from "../../globalStyles/colors";
import StepSidebar from "../StepSidebar/StepSidebar";
import { useHistory } from "react-router-dom";
import { useStores } from "../../../hooks/useStores";

const PostcardConfirm = (props) => {
  
  const [submitted, setSubmitted] = useState(false)
  const history = useHistory();
  const {uiStore} = useStores();
  const handleSumbit = async () => {
    await uiStore.sendPostcard(props.userData.user, props.postcard, props.location)//location userData
    setSubmitted(true)
  }

  return (
    <div className={style.container}>

      {submitted ? 

          <AlertMessage function={() => {history.push(`/projecten/vrienden/werkjes/${props.location}`)}} text={'Je postkaartje is verstuurd!'} titel={'Keer terug'} />
            :
            ''
        }

      <div className={style.mainContent}>
        <div className={style.contentWrapper}>
          <StepSidebar current={3}/>
          <div className={style.image} style={{backgroundImage: `url('/assets/postcards/${props.country}/${props.postcard.background}.svg')`}} >
          <img 
            className={`${style.sticker} ${style[props.postcard.sticker.name]}`}
            src={`/assets/postcards/${props.country}/large/${props.postcard.sticker}.svg`} 
            alt={`Postkaart`}/>
          </div>
        </div>

        <div className={style.nextButton}><GeneralButton onClick={submitted ? null : () => {handleSumbit()}} textColor={COLORS.blackSoft} boxShadow={ `0rem .5rem ${COLORS.green}`} iconBackgroundColor={COLORS.green} backgroundColor={COLORS.greenLight} buttonWidth={"33rem"} buttonHeight={"8rem"} fontSize={"2.4rem"} icon="planeDark"  type="svg" text="Postkaart versturen"/></div>

      </div>

 

    </div>
  );
};

export default PostcardConfirm;
