import React from "react";
import style from "./PostcardInitial.module.css";
import GeneralButton from "../../globalComponents/GeneralButton";
import COLORS from "../../globalStyles/colors";
import SoundButton from "../../globalComponents/SoundButton";

const PostcardInitial = (props) => {
  
  return (
    <div className={style.container}>
      <img className={style.chosenImage} src={"/assets/testSubjects/test.JPG"} alt={"Gekozen image"} width="440" height="440" />
      

      <div className={style.bottomButtons}>
          <div className={style.speechWrap}>
            <img alt={"Wijzend uiltje"}  src={"/assets/illustraties/pointing.svg"} />
            <p className={style.speech__text} >Stuur je vriend een postkaartje als beloning voor het werkje.</p>
            <div className={style.speech__button}><SoundButton play={"welcome"} size={"5.2rem"} fillColor={COLORS.black}/></div>
          </div>

          <div className={style.nextButton}><GeneralButton onClick={props.nextFunction} textColor={COLORS.blackSoft} boxShadow={ `0rem .5rem ${COLORS.green}`} iconBackgroundColor={COLORS.green} backgroundColor={COLORS.greenLight} buttonWidth={"33rem"} buttonHeight={"8rem"} fontSize={"2.4rem"} icon="postcard" type="svg" text="Postkaartje sturen"/></div>
      </div>
    </div>
  );
};

export default PostcardInitial;
