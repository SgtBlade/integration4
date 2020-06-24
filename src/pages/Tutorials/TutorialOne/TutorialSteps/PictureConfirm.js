import React, { useState } from "react";
import styleBg from "./styles/BackgroundProjectOne.module.css";
import style from "./styles/Tutorial.module.css";
import Header from "../../TutorialHeader/Header.js";
import COLORS from "../../../globalStyles/colors";
import GeneralButton from "../../../globalComponents/GeneralButton";
import { useStores } from "../../../../hooks/useStores";
import { useObserver } from "mobx-react-lite";
import { Redirect } from "react-router-dom";
import { ROUTES } from "../../../../consts";

const MaterialenOne = (props) => {

  const {uiStore} = useStores();
  const [redirect, setRedirect] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async e => {
    setSubmitted(true)
    await uiStore.uploadImage('France', props.picture)
  };

  let inputFileRef = null;
  const handleChangePhotoButton = e => {
    e.preventDefault();
    inputFileRef.click();
  };

  const handleFinish = async () => {
    const result = await uiStore.updateChapter(2);
    if(result){uiStore.setUploadState(false);setRedirect(true);}
  }
 
  return useObserver( () => (
    <section className={styleBg.container}>
      {redirect? 
      <Redirect to={ROUTES.map}  /> : ''}
      {uiStore.uploadState ?
        uiStore.uploadState === 'finished' ? 
        <div className={style.uploadMessage}>
          <p className={style.uploadMessage__text}>Klaar met uploaden!</p>
            <GeneralButton
              onClick={handleFinish}
              text="Opdracht voltooid"
              icon="checkMark"
              type="svg"
              boxShadow={`0rem .5rem ${COLORS.greenLight}`}
              iconBackgroundColor={COLORS.greenLight}
              backgroundColor={COLORS.green}
              textColor="#FFFFFF"
            />
        </div>
        :
        <div className={style.uploadMessage}>
          <p className={style.uploadMessage__text}>Aan het uploaden</p>
          <div className={style.loader}></div>
        </div>
        :
        ''
        }

      <Header
      Return={true}
      function={props.returnFunction}
      Title={`Knutselwerkje opslaan`}
      fontSize={"5rem"}/>
      
      <div className={style.boekje}>
        <div className={`${style.boekje__content} ${style.boekje__content__stepCenter} ${style.boekje__content__stepCenter__bevestigFoto}`}>
          <div className={style.bevestigFoto}>
            {props.picture ?
            <img alt={"Upgeloaden foto"} className={style.uploadedPicture} src={props.picture} />
            :
            <div className={style.loader}></div>
            }
          </div>
        </div>
      </div>
      <div className={style.bevestigFoto__buttons}>
        <div className={style.bevestigFoto__button}>           
         <input
              onChange={props.photoInput}
              ref={input => (inputFileRef = input)}
              style={{ display: "none" }}
              type="file"
            />
          <GeneralButton
            onClick={handleChangePhotoButton}
            text="Nieuwe foto"
            buttonWidth="27.5rem"
            icon="again"
            type="svg"
            boxShadow="0rem .5rem #ED1D54"
            iconBackgroundColor={COLORS.redLight}
            backgroundColor={COLORS.red}
            textColor="#FFFFFF"
          />
        </div>
        <div className={style.bevestigFoto__button}>
          <GeneralButton
            text="Opslaan"
            buttonWidth="27.5rem"
            icon="save"
            type="svg"
            onClick={submitted ? null : handleSubmit}
          />
        </div>
        <div className={style.stepTwelve__wrapper__uiltje}>
          <img
            src="../assets/illustraties/uiltje-staant-laatsteStap.svg"
            alt="uiltje"
            className={style.uiltje__image}
          />
        </div>
      </div>
    </section>
  ));
};

export default MaterialenOne;
