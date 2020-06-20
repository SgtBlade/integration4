import React, { useState } from "react";
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
import TutorialStart from "./TutorialStart/TutorialStart.js";
import Header from "../TutorialHeader/Header.js";
//import CameraRequest from "./../Authentication/LoginSequence/CameraRequest/CameraRequest.js"
import { useObserver } from "mobx-react-lite";
//import { ROUTES } from "../../consts";

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
  };
  const [currentScreen, setCurrentScreen] = useState("");

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
          <Header
            Title={"Return to CAMERAREQUEST"}
            Return={true}
            function={() => {
              setCurrentScreen(SCREEN.CAMERAREQUEST);
            }}
          />
        );

      case SCREEN.STAP6:
        return (
          <Header
            Title={"Return to CAMERAGRANTED"}
            Return={true}
            function={() => {
              setCurrentScreen(SCREEN.CAMERAGRANTED);
            }}
          />
        );

      case SCREEN.STAP7:
        return (
          <Header
            Title={"Return to MAILSENT"}
            Return={true}
            function={() => {
              setCurrentScreen(SCREEN.EMAILSCREEN);
            }}
          />
        );

      case SCREEN.STAP8:
        return (
          <Header
            Title={"Return to EMAILSCREEN"}
            Return={true}
            function={() => {
              setCurrentScreen(SCREEN.MAILSENT);
            }}
          />
        );

      case SCREEN.STAP9:
        return (
          <Header
            Title={"Return to MAILSENT"}
            Return={true}
            function={() => {
              setCurrentScreen(SCREEN.FIRSTLOGIN);
            }}
          />
        );

      case SCREEN.STAP10:
        return (
          <Header
            Title={"Return to FIRSTLOGIN"}
            Return={true}
            function={() => {
              setCurrentScreen(SCREEN.NAMEREQUEST);
            }}
          />
        );

      case SCREEN.STAP11:
        return (
          <Header
            Title={"Return to FIRSTLOGIN"}
            Return={true}
            function={() => {
              setCurrentScreen(SCREEN.NAMEREQUEST);
            }}
          />
        );

      case SCREEN.STAP12:
        return (
          <Header
            Title={"Return to FIRSTLOGIN"}
            Return={true}
            function={() => {
              setCurrentScreen(SCREEN.NAMEREQUEST);
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

  console.log(currentScreen);

  return useObserver(() => (
    <div className={style.container}>{returnScreen()}</div>
  ));
};

export default Tutorial;

/*
BACKUP OF OLD PAGE

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const { uiStore } = useStores();

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await uiStore.loginWithEmail(email);
    console.log(result);
  };

  if (window.location.href.indexOf("apiKey") > -1) {
    localStorage.setItem("emailForSignIn", email)
    uiStore.verifyLogin();
  }

  const logOut = () => {
    const fb = uiStore.firebase;
    fb.auth().signOut().then(function() {
      console.log('Logged out')
      localStorage.clear()
    }).catch(function(error) {
      console.log("error occured: ".error.code)
    });
  }
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor={"email"} className="visually-hidden ">
        E-mail
      </label>
      <input
        className={style.input}
        type={email}
        name={"email"}
        placeholder={"Fill in your email."}
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
        required="required"
        autoComplete="off"
      />
        <input type="submit" value="Register" className={style.button} />
      </form>

      <button onClick={e => logOut()} value="" className={style.button}> Sign Out</button>
    </div>
  );
};

*/
