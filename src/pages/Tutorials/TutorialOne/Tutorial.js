import React, { useState } from "react";
import Resizer from 'react-image-file-resizer';
import style from "./Tutorial.module.css";
// import PermissionDetail from "./LoginSequence/PermissionDetail/PermissionDetail.js"
// import Welcome from "./LoginSequence/Welcome/Welcome.js";
// import Captcha from "./LoginSequence/Captcha/Captcha.js";
import MaterialenOne from "./TutorialSteps/MaterialenOne.js";
import MaterialenTwo from "./TutorialSteps/MaterialenTwo.js";
import MaterialenThree from "./TutorialSteps/MaterialenThree.js";
import AlternatiefOne from "./TutorialSteps/AlternatiefOne.js";
import AlternatiefTwo from "./TutorialSteps/AternatiefTwo.js";
import StepOne from "./TutorialSteps/StepOne.js";
import StepTwo from "./TutorialSteps/StepTwo.js";
import StepThree from "./TutorialSteps/StepThree.js";
import StepFour from "./TutorialSteps/StepFour.js";
import StepFive from "./TutorialSteps/StepFive.js";
import StepSix from "./TutorialSteps/StepSix.js";
import StepSeven from "./TutorialSteps/StepSeven.js";
import StepEight from "./TutorialSteps/StepEight.js";
import StepNine from "./TutorialSteps/StepNine.js";
import StepTen from "./TutorialSteps/StepTen.js";
import StepEleven from "./TutorialSteps/StepEleven.js";
import StepTwelve from "./TutorialSteps/StepTwelve.js";
import TutorialStart from "./TutorialStart/TutorialStart.js";
import TakePicture from "./TutorialSteps/TakePicture.js";
import PictureConfirm from "./TutorialSteps/PictureConfirm.js";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../../hooks/useStores";

const Tutorial = () => {
  const SCREEN = {
    START: "START",
    MATERIALEN1: "MATERIALEN1",
    ALTERNATIEF1: "ALTERNATIEF1",
    MATERIALEN2: "MATERIALEN2",
    MATERIALEN3: "MATERIALEN3",
    ALTERNATIEF2: "ALTERNATIEF2",
    STAP1: "STAP1",
    STAP2: "STAP2",
    STAP3: "STAP3",
    STAP4: "STAP4",
    STAP5: "STAP5",
    STAP6: "STAP6",
    STAP7: "STAP7",
    STAP8: "STAP8",
    STAP9: "STAP9",
    STAP10: "STAP10",
    STAP11: "STAP11",
    STAP12: "STAP12",
    PICTURE: "PICTURE",
    PICTURECONFIRM: "PICTURECONFIRM",
  };
  const {uiStore} = useStores();
  const [currentScreen, setCurrentScreen] = useState();
  const [picture, setPicture] = useState(false);
  const [seenVideo, setSeenVideo] = useState(false);
  const [guidedUser, setGuidedUser] = useState(true);

  const handleChangePhotoFileInput = e => {
    const target = e.currentTarget;
    const file = target.files.item(0);
    if (!file.type.startsWith("image/")) {
      alert("Dit is geen foto");
      return;
    }else{
      if(currentScreen === SCREEN.PICTURE)setCurrentScreen(SCREEN.PICTURECONFIRM)
      Resizer.imageFileResizer(
        file,
        440,
        440,
        'JPEG',
        80,
        0,
        uri => {setPicture(uri)},
        'base64'
    );
    }
  }


  const returnScreen = () => {
    switch (currentScreen) {
      case SCREEN.START:
        return (
          <TutorialStart
            tekstBubbel="Knutsel deze Eiffeltoren in 14 stappen!"
            nextFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN1);
            }}
          />
        );
      case SCREEN.MATERIALEN1:
        return (
          <MaterialenOne
            nextFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN2);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            notAvailableFunction={() => {
              setCurrentScreen(SCREEN.ALTERNATIEF1);
            }}
          />
        );
      case SCREEN.ALTERNATIEF1:
        return (
          <AlternatiefOne
            nextFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN2);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN1);
            }}
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
          />
        );
      case SCREEN.MATERIALEN2:
        return (
          <MaterialenTwo
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN3);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN1);
            }}
          />
        );
      case SCREEN.MATERIALEN3:
        return (
          <MaterialenThree
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP1);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN2);
            }}
            notAvailableFunction={() => {
              setCurrentScreen(SCREEN.ALTERNATIEF2);
            }}
          />
        );
      case SCREEN.ALTERNATIEF2:
        return (
          <AlternatiefTwo
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP1);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN3);
            }}
          />
        );
      case SCREEN.STAP1:
        return (
          <StepOne
          guidedUser={guidedUser}
          setGuidedUser={setGuidedUser}
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP2);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN3);
            }}
          />
        );

      case SCREEN.STAP2:
        return (
          <StepTwo
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP1);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP3);
            }}
          />
        );

      case SCREEN.STAP3:
        return (
          <StepThree
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP2);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP4);
            }}
          />
        );

      case SCREEN.STAP4:
        return (
          <StepFour
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP3);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP5);
            }}
          />
        );

      case SCREEN.STAP5:
        return (
          <StepFive
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP4);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP6);
            }}
          />
        );

      case SCREEN.STAP6:
        return (
          <StepSix
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP5);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP7);
            }}
          />
        );

      case SCREEN.STAP7:
        return (
          <StepSeven
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP6);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP8);
            }}
          />
        );

      case SCREEN.STAP8:
        return (
          <StepEight
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP7);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP9);
            }}
          />
        );

      case SCREEN.STAP9:
        return (
          <StepNine
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP8);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP10);
            }}
          />
        );

      case SCREEN.STAP10:
        return (
          <StepTen
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP9);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP11);
            }}
          />
        );

      case SCREEN.STAP11:
        return (
          <StepEleven
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP10);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.STAP12);
            }}
          />
        );

      case SCREEN.STAP12:
        return (
          <StepTwelve
            startFunction={() => {
              setCurrentScreen(SCREEN.START);
            }}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP10);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.PICTURE);
            }}
          />
        );
      case SCREEN.PICTURE:
        return (
          <TakePicture

            setPicture={setPicture}
            photoInput={handleChangePhotoFileInput}
            returnFunction={() => {
              setCurrentScreen(SCREEN.STAP12);
            }}
            nextFunction={() => {
              setCurrentScreen(SCREEN.PICTURECONFIRM);
            }}
          />
        );
      case SCREEN.PICTURECONFIRM:
        return (
          <PictureConfirm
            photoInput={handleChangePhotoFileInput}
            setPicture={setPicture}
            picture={picture}
            returnFunction={() => {
              setCurrentScreen(SCREEN.PICTURE);
            }}
          />
        );

      default:
        return (
          <TutorialStart
            tekstBubbel="Knutsel deze Eiffeltoren in 14 stappen!"
            nextFunction={() => {
              setCurrentScreen(SCREEN.MATERIALEN1);
            }}
          />
        ); //<Welcome nextFunction={() => {setCurrentScreen(SCREEN.PERMISSIONDETAIL)}}/>
    }
  };

  let videoRef = null;
  const skipVideo = e => {
    videoRef.pause();
    setSeenVideo(true)
  };

  if(uiStore.currentUser.chapter > 1 && !seenVideo)setSeenVideo(true)


  return useObserver(() => (

    !seenVideo ? 
      <div className={style.videoContent}>
      <div onClick={skipVideo} className={style.skipButton}><img src={'/assets/icons/skip.svg'} alt="skip icon"/></div>
      <video  ref={video => (videoRef = video)} className={style.video} onEnded={()=> {setSeenVideo(true)}} autoPlay>
          <source src={"/assets/videos/frankrijk.mp4"} type="video/mp4" />
          <p>Je internet browser ondersteund geen video</p>
       </video>
       <div className={style.loaderWrap}><div className={style.loader}></div></div>
       </div>
    :
    <div className={style.container}>{returnScreen()}</div>
  ));
};

export default Tutorial;